import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    "IsBest": false,
    "Name": "Luftbase",
    "Type": "nofw",
    "Img": "nofw/luftbase",
    "Link": "https://demo.notequal.website/luftbase/"
  },
  {
    "IsBest": false,
    "Name": "Pixture",
    "Type": "nofw",
    "Img": "nofw/pixture",
    "Link": "https://demo.notequal.website/pixture/"
  },
  {
    "IsBest": false,
    "Name": "Will Towers",
    "Type": "nofw",
    "Img": "nofw/willtowers",
    "Link": "https://willtowers.ru/"
  },
  {
    "IsBest": false,
    "Name": "SmartPay",
    "Type": "nofw",
    "Img": "nofw/smartpay",
    "Link": "https://demo.notequal.website/smartpay/"
  },
  {
    "IsBest": false,
    "Name": "LCS",
    "Type": "nofw",
    "Img": "nofw/lcs",
    "Link": "https://demo.notequal.website/lcs/"
  },
  {
    "IsBest": false,
    "Name": "NFTop",
    "Type": "nofw",
    "Img": "nofw/nftop",
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
    "Name": "NFT Banker",
    "Type": "nofw",
    "Img": "nofw/nftbanker",
    "Link": "https://demo.notequal.website/nftbanker/"
  },
  {
    "IsBest": false,
    "Name": "Advertex",
    "Type": "nofw",
    "Img": "nofw/advertex",
    "Link": "https://demo.notequal.website/advertex/"
  },
  {
    "IsBest": false,
    "Name": "Atlant",
    "Type": "nofw",
    "Img": "nofw/atlant",
    "Link": "https://demo.notequal.website/inproc/sitemap.html"
  },
  {
    "IsBest": true,
    "Name": "BotSwap",
    "Type": "react",
    "Img": "react/botswap",
    "Link": "botswap.app/"
  },
  {
    "IsBest": true,
    "Name": "Code Metal",
    "Type": "nofw",
    "Img": "nofw/metal",
    "Link": "http://demo.notequal.website/metal/sitemap.html"
  },
  {
    "IsBest": true,
    "Name": "CruxBits",
    "Type": "react",
    "Img": "react/cruxbits",
    "Link": "http://crux.digit-nova.com/"
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