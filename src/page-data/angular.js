import TotalBytesBreakdown from "../data/angular/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/angular/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/angular/all/img-bytes-breakdown";
import TotalBytesComparison from "../data/angular/all/total-bytes-comparison";
import JSBytesComparison from "../data/angular/all/js-bytes-comparison";

import TotalBytesBreakdownNoJquery from "../data/angular/jquery/total-bytes-breakdown";
import JSBytesBreakdownNoJquery from "../data/angular/jquery/js-bytes-breakdown";
import ImgBytesBreakdownNoJquery from "../data/angular/jquery/img-bytes-breakdown";
import TotalBytesComparisonNoJquery from "../data/angular/jquery/total-bytes-comparison";
import JSBytesComparisonNoJquery from "../data/angular/jquery/js-bytes-comparison";

export const headerOptions = [
  'All Angular sites',
  'Angular sites without jQuery'
];

export const data = {
  [headerOptions[0]]: {
    'totalNumOrigins': {
      value: 10318,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:aeb3825c52234ab7b5cc84791f5fba93'
    },
    'totalBytesPercentile': {
      numOrigins: 10318,
      data: [2022, 3558, 5844],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:22b50ff19a0b42b0b70bc6efb3abcaff'
    },
    'totalBytesBreakdown': {
      numOrigins: 10318,
      data: TotalBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:4a62b34455df43879d7787c1abbcffca'
    },
    'totalBytesComparison': {
      data: TotalBytesComparison
    },
    'compressedRequests': {
      numOrigins: 7163,
      numRequests: 100864,
      gzipCompressedPercent: 63,
      brotliCompressedPercent: 4,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:1bc845f284c14ceca3e9d21f6c959fce'
    },
    'jsBytesPercentile': {
      numOrigins: 10318,
      data: [929, 1422, 2083],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8a2edfa54ab34f12bb284fc121843a7f'
    },
    'jsBytesBreakdown': {
      numOrigins: 10318,
      data: JSBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:436372e9b0b548c5b44b657b63ed3180'
    },
    'jsBytesComparison': {
      numOrigins: 10318,
      data: JSBytesComparison,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:436372e9b0b548c5b44b657b63ed3180'
    },
    'imgBytesPercentile': {
      numOrigins: 10318,
      data: [463, 1497, 3613],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:9512c5ac1ddc425a925a21b0d0f75698'
    },
    'imgBytesBreakdown': {
      numOrigins: 10318,
      data: ImgBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c24b24a93c6c4511b503839e69c34f75'
    },
    'optimizedImgOrigins': {
      numOrigins: 10248,
      data: [80, 20],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:248521c6ae9b43eca70774ba18efad19"
    },
    'responsiveImgOrigins': {
      numOrigins: 10282,
      data: [76, 24],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:f740008382b14854a2550b8e0913336b"
    },
    'nextGenImgOrigins': {
      numOrigins: 10248,
      data: [51, 49],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:3e840af678154dfe90b7bff1480680be"
    },
    'offscreenImgOrigins': {
      numOrigins: 10282,
      data: [80, 20],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:d189aa7889314850940a21a07f839299'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 4993,
      data: [15, 29, 56],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:5e2ba9a3296544aca6c662c4dc4af046'
    },
    'firstInputDelayCrux': {
      numOrigins: 3666,
      data: [77, 15, 8],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:cd0f61c39a9c4ae78fc4330344a386c4'
      
    },
    'timeToInteractive': {
      numOrigins: 10318,
      data: [13.2, 19.8, 29.7],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:94304b3a169a49c8954fc5cfb1635a75'
    },
    'firstContentfulPaint': {
      numOrigins: 10318,
      data: [4.9, 7.42, 10.49],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:9494e17b620b495b92bc6bb8927238f2'
    }
  },
  [headerOptions[1]]: {
    'totalNumOrigins': {
      value: 5239,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:98d2472911834e2082cc1eb3de28bf87'
    },
    'totalBytesPercentile': {
      numOrigins: 5239,
      data: [1737, 2970, 4797],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c88deccd0d4c4ca09c64ceaa51245add'
    },
    'totalBytesBreakdown': {
      numOrigins: 5239,
      data: TotalBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:b891eb1edf7e40e0b948ab7d38498056'
    },
    'totalBytesComparison': {
      data: TotalBytesComparisonNoJquery
    },
    'compressedRequests': {
      numOrigins: 3463,
      numRequests: 38337,
      gzipCompressedPercent: 59,
      brotliCompressedPercent: 4,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:50caf2eede7a4604ab5d0d0b9478fc95'
    },
    'jsBytesPercentile': {
      numOrigins: 5239,
      data: [845, 1315, 1874],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:548b522d10fb40eb94aa60f45c8bad43'
    },
    'jsBytesBreakdown': {
      numOrigins: 5239,
      data: JSBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8edc46e09a774782be0b84c5bf348006'
    },
    'jsBytesComparison': {
      numOrigins: 5239,
      data: JSBytesComparisonNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8edc46e09a774782be0b84c5bf348006'
    },
    'imgBytesPercentile': {
      numOrigins: 5239,
      data: [337, 1101, 2660],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:0ddcd253f7414392b729a290c8088026'
    },
    'imgBytesBreakdown': {
      numOrigins: 5239,
      data: ImgBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:49354b1cc7a54975aa1860e546fc829a'
    },
    'optimizedImgOrigins': {
      numOrigins: 5199,
      data: [86, 14],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:9376f0a065d645c4b8a5ef87c4bbb776"
    },
    'responsiveImgOrigins': {
      numOrigins: 5215,
      data: [79, 21],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:abf752ba64bd4b3cb9a15b406485eb82"
    },
    'nextGenImgOrigins': {
      numOrigins: 5199,
      data: [60, 40],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:20cd39338bcf42ed8294fc58ed44c97f"
    },
    'offscreenImgOrigins': {
      numOrigins: 5215,
      data: [84, 16],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:f99019bfd48349788f30d2797c6f7a87"
    },
    'firstContentfulPaintCrux': {
      numOrigins: 2382,
      data: [16, 29, 55],
      query: "https://bigquery.cloud.google.com/savedquery/7475840913:6a1caae5a7904594bf268975de713c8b"
    },
    'firstInputDelayCrux': {
      numOrigins: 1707,
      data: [79, 14, 7],
      query: "https://bigquery.cloud.google.com/savedquery/7475840913:c166d8d8fa0343efaa4ea20b6b3ba55b"
    },
    'timeToInteractive': {
      numOrigins: 5239,
      data: [11.7, 17.4, 24.9],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:1606b1f5258e4d1e8f134202014ad919"
    },
    'firstContentfulPaint': {
      numOrigins: 5239,
      data: [4.67, 7.11, 10.38],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:28a0a256446c4784943d3c9aacebb7bf'
    }
  }
}