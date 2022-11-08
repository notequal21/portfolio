import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    "Id": 0,
    "IsBest": false,
    "Name": "Luftbase",
    "Type": "nofw",
    "Img": "nofw/luftbase",
    "Link": "https://demo.notequal.website/luftbase/"
  },
  {
    "Id": 1,
    "IsBest": false,
    "Name": "Pixture",
    "Type": "nofw",
    "Img": "nofw/pixture",
    "Link": "https://demo.notequal.website/pixture/"
  },
  {
    "Id": 2,
    "IsBest": false,
    "Name": "Will Towers",
    "Type": "nofw",
    "Img": "nofw/willtowers",
    "Link": "https://willtowers.ru/"
  },
  {
    "Id": 3,
    "IsBest": false,
    "Name": "SmartPay",
    "Type": "nofw",
    "Img": "nofw/smartpay",
    "Link": "https://demo.notequal.website/smartpay/"
  },
  {
    "Id": 4,
    "IsBest": false,
    "Name": "LCS",
    "Type": "nofw",
    "Img": "nofw/lcs",
    "Link": "https://demo.notequal.website/lcs/"
  },
  {
    "Id": 5,
    "IsBest": false,
    "Name": "NFTop",
    "Type": "nofw",
    "Img": "nofw/nftop",
    "Link": "https://demo.notequal.website/NFTop/"
  },
  {
    "Id": 6,
    "IsBest": false,
    "Name": "Weather Check",
    "Type": "vue",
    "Img": "vue/weathercheck",
    "Link": "https://demo.notequal.website/weather-vue/"
  },
  {
    "Id": 7,
    "IsBest": false,
    "Name": "NFT Banker",
    "Type": "nofw",
    "Img": "nofw/nftbanker",
    "Link": "https://demo.notequal.website/nftbanker/"
  },
  {
    "Id": 8,
    "IsBest": false,
    "Name": "Advertex",
    "Type": "nofw",
    "Img": "nofw/advertex",
    "Link": "https://demo.notequal.website/advertex/"
  },
  {
    "Id": 9,
    "IsBest": false,
    "Name": "Atlant",
    "Type": "nofw",
    "Img": "nofw/atlant",
    "Link": "https://demo.notequal.website/inproc/sitemap.html"
  },
  {
    "Id": 10,
    "IsBest": true,
    "Name": "BotSwap",
    "Type": "react",
    "Img": "react/botswap",
    "Link": "botswap.app/"
  },
  {
    "Id": 11,
    "IsBest": true,
    "Name": "Code Metal",
    "Type": "nofw",
    "Img": "nofw/metal",
    "Link": "http://demo.notequal.website/metal/sitemap.html"
  },
  {
    "Id": 12,
    "IsBest": true,
    "Name": "CruxBits",
    "Type": "react",
    "Img": "react/cruxbits",
    "Link": "http://crux.digit-nova.com/"
  },
  {
    "Id": 13,
    "IsBest": true,
    "Name": "Paradox - landing",
    "Type": "vue",
    "Img": "vue/paradox-index",
    "Link": "https://paradox.notequal.website/"
  },
  {
    "Id": 14,
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