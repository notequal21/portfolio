import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    "IsBest": false,
    "Name": "Luftbase",
    "Type": "html",
    "Img": "html/luftbase",
    "Link": "https://demo.notequal.website/luftbase/"
  },
  {
    "IsBest": false,
    "Name": "GetPort",
    "Type": "html",
    "Img": "html/getport",
    "Link": "https://demo.notequal.website/get-port/"
  },
  {
    "IsBest": false,
    "Name": "Yeezypay - finance",
    "Type": "html",
    "Img": "html/yeezypay-finance",
    "Link": "http://demo.notequal.website/yeezypay_finance/"
  },
  {
    "IsBest": false,
    "Name": "Pixture",
    "Type": "html",
    "Img": "html/pixture",
    "Link": "https://demo.notequal.website/pixture/"
  },
  {
    "IsBest": false,
    "Name": "Will Towers",
    "Type": "html",
    "Img": "html/willtowers",
    "Link": "https://willtowers.ru/"
  },
  {
    "IsBest": false,
    "Name": "SmartPay",
    "Type": "html",
    "Img": "html/smartpay",
    "Link": "https://demo.notequal.website/smartpay/"
  },
  {
    "IsBest": false,
    "Name": "LCS",
    "Type": "html",
    "Img": "html/lcs",
    "Link": "https://demo.notequal.website/lcs/"
  },
  {
    "IsBest": false,
    "Name": "NFTop",
    "Type": "html",
    "Img": "html/nftop",
    "Link": "https://demo.notequal.website/NFTop/"
  },
  {
    "IsBest": false,
    "Name": "Weather Check",
    "Type": "vue",
    "Img": "vue/weathercheck",
    "Link": "https://demo.notequal.website/weather-vue/"
  },
  {
    "IsBest": false,
    "Name": "Yeezypay",
    "Type": "html",
    "Img": "html/yeezypay",
    "Link": "https://demo.notequal.website/yeezypay/sitemap.html"
  },
  {
    "IsBest": false,
    "Name": "NFT Banker",
    "Type": "html",
    "Img": "html/nftbanker",
    "Link": "https://demo.notequal.website/nftbanker/"
  },
  {
    "IsBest": false,
    "Name": "Fredemo",
    "Type": "html",
    "Img": "html/fredemo",
    "Link": "https://paradox.notequal.website/overview"
  },
  {
    "IsBest": false,
    "Name": "Yeezypay - conf",
    "Type": "html",
    "Img": "html/yeezypay-conf",
    "Link": "http://demo.notequal.website/yeezypay_conf/"
  },
  {
    "IsBest": false,
    "Name": "Advertex",
    "Type": "html",
    "Img": "html/advertex",
    "Link": "https://demo.notequal.website/advertex/"
  },
  {
    "IsBest": false,
    "Name": "Atlant",
    "Type": "html",
    "Img": "html/atlant",
    "Link": "https://demo.notequal.website/inproc/sitemap.html"
  },
  {
    "IsBest": true,
    "Name": "BotSwap",
    "Type": "react",
    "Img": "react/botswap",
    "Link": "https://botswap.app/"
  },
  {
    "IsBest": true,
    "Name": "Code Metal",
    "Type": "html",
    "Img": "html/metal",
    "Link": "http://demo.notequal.website/metal/sitemap.html"
  },
  {
    "IsBest": true,
    "Name": "Paradox - landing",
    "Type": "vue",
    "Img": "vue/paradox-index",
    "Link": "https://paradox.notequal.website/"
  },
  {
    "IsBest": true,
    "Name": "Paradox - dashboard",
    "Type": "vue",
    "Img": "vue/paradox-dashboard",
    "Link": "https://paradox.notequal.website/overview"
  }
]

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
})

export default projectsSlice.reducer