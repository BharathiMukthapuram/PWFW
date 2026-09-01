async function screenShot(page,filName){
    await page.screenshot({path:`screenshots/${filName}.jpg`})
}

export default screenShot