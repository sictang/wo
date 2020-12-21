const wareId = 'wareId'
const wareIdArr = []
let textArr = []
let storgePrice = []
let text = ''
if (typeof $request != 'undefined') {
    if ($request.url.match('addFavorite')) {
        addFavorite()
    } else if ($request.url.match('cancelFavorite')) {
        cancelFavorite()
    }
} else {
    main()
}


//关注商品时保存ID
function addFavorite() {
    const addWareId = $request.body.match(/wareId%22%3A%22(.+?)%/)[1]
    if (read(wareId)) {
        const newWareIdArr = JSON.parse(read(wareId))
        const num = newWareIdArr.indexOf(addWareId)
        if (num === -1) {
            newWareIdArr.push(addWareId)
            write(JSON.stringify(newWareIdArr), wareId)
            console.log('关注成功')
        }
    } else {
        wareIdArr.push(addWareId)
        write(JSON.stringify(wareIdArr), wareId)
        console.log('首次关注成功')
    }
    getName(addWareId)
}

//取消关注时删除ID
function cancelFavorite() {
    if (read(wareId)) {
        const cancelId = $request.body.match(/wareId%22%3A%22(.+?)%/)[1]
        const newWareIdArr = JSON.parse(read(wareId))
        const num = newWareIdArr.indexOf(cancelId)
        if (num != -1) {
            newWareIdArr.splice(num, 1)
        }
        clean(cancelId)
        clean(cancelId+'price')
        write(JSON.stringify(newWareIdArr), wareId)
        console.log('取消关注')
    }
    $done()
}

//获取商品名称
async function getName(val) {
    const getNameArr = {
        method: 'get',
        url: 'https://diviner.jd.com/diviner?lid=19&ec=utf-8&p=902029&sku=' + val,
        headers: {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
        }
    }
    await $task.fetch(getNameArr).then(response => {
        const body = JSON.parse(response.body)
        const name = body.data[0].t
        write(name, val)
        $done()
    })
}


//主要
async function main() {
    const product = JSON.parse(read(wareId))
    for (let i = 0; i < product.length; i++) {
        const name = read(product[i])
        const thePrice = read(product[i]) + 'price'
        textArr = []
        storgePrice = []
        text += '-----------------------------\n'
        text += name + '\n'
        const price = {
            method: 'get',
            url: 'https://item-soa.jd.com/getWareBusiness?skuId=' + product[i],
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
            }
        }
        await getPrice(price)
        await getLowerPrice(product[i])
        const smallPrice = judge(storgePrice)
        if (read(thePrice)) {
            if (smallPrice < read(thePrice)) {
                textArr.splice(1, 0, '降价了，现在是：' + smallPrice)
                for (let i = 0; i < textArr.length; i++) {
                    text += textArr[i]
                }
                write(smallPrice, thePrice)
            }else{
                console.log('价格没有变动，不推送提醒')
            }
        } else {
            write(smallPrice, thePrice)
            console.log('首次写入价格成功')
        }
    }
    if (text != '') {
        notify('', '', text)
    }
    $done()
}

async function getPrice(url) {
    await $task.fetch(url).then(response => {
        const body = JSON.parse(response.body)
        const acitvity = body.promotion.activity
        const gift = body.promotion.gift
        const couponInfo = body.couponInfo
        const currentPrice = body.price.p * 1
        const originalPrice = body.price.op * 1
        let buyArr = []

        let buy, discount, newPrice
        textArr.push('原价：' + originalPrice + '\n')
        textArr.push('现价：' + currentPrice + '\n')
        storgePrice.push(currentPrice)

        for (let i = 0; i < gift.length; i++) {
            textArr.push('赠品：' + gift[i].value + '\n')
        }
        for (let i = 0; i < acitvity.length; i++) {

            if (acitvity[i].value.indexOf('享受单件价') === -1) {
                if (acitvity[i].value.indexOf('换购') === -1) {
                    if (acitvity[i].value.indexOf('返券包') === -1) {
                        textArr.push('促销：' + acitvity[i].value + '\n')
                        buyArr = acitvity[i].value.match(/满(.+?)件/g)
                        const discountArr = acitvity[i].value.match(/打(.+?)折/g)
                        const fullErro = acitvity[i].value.match(/满(.+?)元减(.+?)元/)[1]
                        const reduction = acitvity[i].value.match(/满(.+?)元减(.+?)元/)[2]
                        if (buyArr) {
                            for (let i = 0; i < buyArr.length; i++) {
                                buy = buyArr[i].match(/满(.+?)件/)[1]
                                discount = discountArr[i].match(/打(.+?)折/)[1] * 0.1
                                disPrice = (currentPrice * buy) * discount / buy
                                disPrice = disPrice.toFixed(2)
                                textArr.push('满减：' + buy + '件：' + disPrice + '，总价：' + buy * disPrice + '\n')
                                storgePrice.push(disPrice)
                            }
                        } else if (fullErro) {
                            for (let i = 1; i < 12; i++) {
                                if (fullErro <= currentPrice * i) {
                                    newPrice = (currentPrice * i - reduction) / i
                                    newPrice = newPrice.toFixed(2)
                                    textArr.push('促销：' + i + '件：' + newPrice + '，总价：' + newPrice * i + '\n')
                                    storgePrice.push(newPrice)
                                    break
                                }
                            }

                        }
                    }
                }
            }

        }
        for (let i = 0; i < couponInfo.length; i++) {
            const full = couponInfo[i].discountText.match(/满(.+?)减(.+?)的/)[1] * 1
            const reduce = couponInfo[i].discountText.match(/满(.+?)减(.+?)的/)[2] * 1
            textArr.push('优惠券：' + couponInfo[i].discountText + '\n')
            for (let i = 1; i < 12; i++) {
                if (full <= currentPrice * i) {
                    let unitPrice = (currentPrice * i - reduce) / i
                    unitPrice = unitPrice.toFixed(2)
                    textArr.push('优惠券：' + i + '件:' + unitPrice + '，总价：' + i * unitPrice + '\n')
                    storgePrice.push(unitPrice)
                    if (buyArr) {
                        for (let i = buy; i < 12; i++) {
                            if (full <= currentPrice * i) {
                                let unitPrice = ((currentPrice * i) * discount - reduce) / i
                                unitPrice = unitPrice.toFixed(2)
                                textArr.push('满减：' + i + '件：' + unitPrice + '，总价：' + i * unitPrice + '\n')
                                storgePrice.push(unitPrice)
                                break
                            }
                        }

                    }
                    break
                }
            }
        }
    }).catch(erro => {
        console.log(erro)
    })
}

async function getLowerPrice(num) {
    const lowerPriceTable = {
        method: 'post',
        url: 'https://apapia-history.manmanbuy.com/ChromeWidgetServices/WidgetServices.ashx',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - mmbWebBrowse - ios"
        },
        body: "methodName=getHistoryTrend&p_url=" + encodeURIComponent('https://item.jd.com/' + num + '.html')
    }
    await $task.fetch(lowerPriceTable).then(response => {
        const body = JSON.parse(response.body)
        const listLower = body.single.listLower
        if (listLower) {
            for (let i = 0; i < listLower.length; i++) {
                if (listLower[i].days === 0) {
                    textArr.push('最低价：' + listLower[i].lowerPrice + '，')
                } else if (listLower[i].days === 30) {
                    textArr.push(listLower[i].days + '天：' + listLower[i].lowerPrice + '\n')
                } else {
                    textArr.push(listLower[i].days + '天：' + listLower[i].lowerPrice + '，')
                }
            }
        }
    }).catch(erro => {
        console.log(erro)
    })
}



function write(key, val) {
    return $prefs.setValueForKey(key, val)
}
function read(val) {
    return $prefs.valueForKey(val)
}
function clean(val) {
    return $prefs.removeValueForKey(val)
}
function notify(title, subtitle, text) {
    if (subtitle == undefined) {
        subtitle = ''
        text = ''
    } else if (text == undefined) {
        text = ''
    }
    $notify(title, subtitle, text)
}
function judge(a) {
    for (let b = 0; b < a.length; b++) {
        let num = 0
        for (let i = 0; i < a.length; i++) {
            if (a[b] <= a[i]) {
                num += 1
            } else {
                break
            }
        }
        if (num === a.length) {
            return a[b]
        }
    }
}
