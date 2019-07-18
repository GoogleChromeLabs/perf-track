import TotalBytesBreakdown from "../data/vue/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/vue/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/vue/all/img-bytes-breakdown";
import TotalBytesComparison from "../data/vue/all/total-bytes-comparison";
import JSBytesComparison from "../data/vue/all/js-bytes-comparison";

import TotalBytesBreakdownNoJquery from "../data/vue/jquery/total-bytes-breakdown";
import JSBytesBreakdownNoJquery from "../data/vue/jquery/js-bytes-breakdown";
import ImgBytesBreakdownNoJquery from "../data/vue/jquery/img-bytes-breakdown";
import TotalBytesComparisonNoJquery from "../data/vue/jquery/total-bytes-comparison";
import JSBytesComparisonNoJquery from "../data/vue/jquery/js-bytes-comparison";

import TotalBytesBreakdownNuxt from "../data/vue/nuxt/total-bytes-breakdown";
import JSBytesBreakdownNuxt from "../data/vue/nuxt/js-bytes-breakdown";
import ImgBytesBreakdownNuxt from "../data/vue/nuxt/img-bytes-breakdown";
import TotalBytesComparisonNuxt from "../data/vue/nuxt/total-bytes-comparison";
import JSBytesComparisonNuxt from "../data/vue/nuxt/js-bytes-comparison";

export const headerOptions = [
  'All Vue sites',
  'Vue sites without jQuery',
  'Vue sites with Nuxt.js'
];

export const data = {
  [headerOptions[0]]: {
    'totalNumOrigins': {
      value: 52658,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:29425912db4d4b209459b25f05c4beee'
    },
    'totalBytesPercentile': {
      numOrigins: 52658,
      data: [2639, 4553, 7253],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:fc0338b46b344488ae68b607881f8123'
    },
    'totalBytesBreakdown': {
      numOrigins: 52658,
      data: TotalBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:2bf53e0a836f43c682608f465857a016'
    },
    'totalBytesComparison': {
      data: TotalBytesComparison
    },
    'compressedRequests': {
      numOrigins: 41688,
      numRequests: 705078,
      gzipCompressedPercent: 65,
      brotliCompressedPercent: 9,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:2f5065c5f85c4694890c06780ea5f768'
    },
    'jsBytesPercentile': {
      numOrigins: 52658,
      data: [769, 1164, 1602],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:08ab7aa3a1044fc384b2c4c7b8fd51ba'
    },
    'jsBytesBreakdown': {
      numOrigins: 52658,
      data: JSBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:aae0f29863d64a87a7ca631dbec24943'
    },
    'jsBytesComparison': {
      numOrigins: 52658,
      data: JSBytesComparison,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:aae0f29863d64a87a7ca631dbec24943'
    },
    'imgBytesPercentile': {
      numOrigins: 52658,
      data: [1237, 2848, 5395],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c4147c6b8d5448ee87aa7087ba8973f6'
    },
    'imgBytesBreakdown': {
      numOrigins: 52658,
      data: ImgBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:1d1c76c53dc645b385875733bf2667d1'
    },
    'optimizedImgOrigins': {
      numOrigins: 52404,
      data: [70, 30],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:45f05334743344f98e0ab56d45873122"
    },
    'responsiveImgOrigins': {
      numOrigins: 52528,
      data: [63, 37],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:de2911a13fb041b4a82e4ff5c8d21671"
    },
    'nextGenImgOrigins': {
      numOrigins: 52404,
      data: [30, 70],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:5aca16a4be7e4b14b1afb0fe1f2bdb0b"
    },
    'offscreenImgOrigins': {
      numOrigins: 52528,
      data: [54, 46],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:be38e760c67c4e99ab7e43a648690b45'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 22265,
      data: [22, 35, 43],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f4b043ff03f641fbb50f1f04ff7da120'
    },
    'firstInputDelayCrux': {
      numOrigins: 14095,
      data: [79, 14, 7],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:7d748d4dc05e4f0a95e4573b6d670d13'
      
    },
    'timeToInteractive': {
      numOrigins: 52658,
      data: [16.3, 25.5, 37.6],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:247ca0aa0b374fbab6873544f685f36c'
    }
  },
  [headerOptions[1]]: {
    'totalNumOrigins': {
      value: 11218,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:440969b7f5a14b82bcdc314ad8c344d8'
    },
    'totalBytesPercentile': {
      numOrigins: 11218,
      data: [1782, 3405, 5858],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:28c3eaa8a30742258129f06987a082ca'
    },
    'totalBytesBreakdown': {
      numOrigins: 11218,
      data: TotalBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:12cc6e201d3f479f9df887c3913405d1'
    },
    'totalBytesComparison': {
      data: TotalBytesComparisonNoJquery
    },
    'compressedRequests': {
      numOrigins: 7199,
      numRequests: 102716,
      gzipCompressedPercent: 64,
      brotliCompressedPercent: 7,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:eeb3830a07414d26a7a1edcd6a09e5ea'
    },
    'jsBytesPercentile': {
      numOrigins: 11218,
      data: [545, 911, 1347],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:02a95deca24e4a27910b1d306f6065a1'
    },
    'jsBytesBreakdown': {
      numOrigins: 11218,
      data: JSBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8060313dbf824e1ab2e14112af5d4953'
    },
    'jsBytesComparison': {
      numOrigins: 11218,
      data: JSBytesComparisonNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8060313dbf824e1ab2e14112af5d4953'
    },
    'imgBytesPercentile': {
      numOrigins: 11218,
      data: [667, 1965, 4299],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f5f650ceccb94019b520d6f8f7ebb445'
    },
    'imgBytesBreakdown': {
      numOrigins: 11218,
      data: ImgBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:eb36e4655a8141b1b9d7f820e616ff9e'
    },
    'optimizedImgOrigins': {
      numOrigins: 11139,
      data: [76, 24],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:0c62d2af4cfb4602ab526d00a2a45d3a"
    },
    'responsiveImgOrigins': {
      numOrigins: 11178,
      data: [71, 29],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:554e7e7f878149ab8d3b89045d241df1"
    },
    'nextGenImgOrigins': {
      numOrigins: 11139,
      data: [45, 55],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:5c463d8790ef4312ad789a546b315e6b"
    },
    'offscreenImgOrigins': {
      numOrigins: 11178,
      data: [75, 25],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:50e9e9544c26415697ba6d3b320b07ea"
    },
    'firstContentfulPaintCrux': {
      numOrigins: 4936,
      data: [21, 33, 46],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:ed139c0183d4437198ce78bc3d335d0c"
    },
    'firstInputDelayCrux': {
      numOrigins: 3339,
      data: [81, 12, 7],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:b72b7fa1c0db4b5f98c5f0a7ec00d602"
    },
    'timeToInteractive': {
      numOrigins: 11218,
      data: [9.9, 16.2, 25.2],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:c738e488a599408f9b0c5776a86eb72b"
    }
  },
  [headerOptions[2]]: {
    'totalNumOrigins': {
      value: 2710,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:38b99f185aca412f8cc76b03b8d8040f'
    },
    'totalBytesPercentile': {
      numOrigins: 2710,
      data: [2050, 3931, 6964],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:ffc66fd1955c4d32a6a5da6d16df7113'
    },
    'totalBytesBreakdown': {
      numOrigins: 2710,
      data: TotalBytesBreakdownNuxt,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3827763d136e4a47b5899fe476947cc9'
    },
    'totalBytesComparison': {
      data: TotalBytesComparisonNuxt
    },
    'compressedRequests': {
      numOrigins: 1724,
      numRequests: 28001,
      gzipCompressedPercent: 76,
      brotliCompressedPercent: 7,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:60dba6cd62be41029f01afe8fc316b3b'
    },
    'jsBytesPercentile': {
      numOrigins: 2710,
      data: [639, 1053, 1623],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:2a5b362af96647aa9ac38a62b523aec0'
    },
    'jsBytesBreakdown': {
      numOrigins: 2710,
      data: JSBytesBreakdownNuxt,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:83bacb28fa044bf98f644e28508082bd'
    },
    'jsBytesComparison': {
      numOrigins: 2710,
      data: JSBytesComparisonNuxt,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:83bacb28fa044bf98f644e28508082bd'
    },
    'imgBytesPercentile': {
      numOrigins: 2710,
      data: [740, 1992, 4462],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:a8cfe05a97004f6ebe4f137b7d395906'
    },
    'imgBytesBreakdown': {
      numOrigins: 2710,
      data: ImgBytesBreakdownNuxt,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:31d85aa305534aa0a362d0d9458d2127'
    },
    'optimizedImgOrigins': {
      numOrigins: 2696,
      data: [73, 27],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:5533b7da439e403092a7f9a5e3f53fc6"
    },
    'responsiveImgOrigins': {
      numOrigins: 2704,
      data: [68, 32],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:e891cc17c5294aa48606a1d238700b21"
    },
    'nextGenImgOrigins': {
      numOrigins: 2696,
      data: [42, 58],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:9c1b8691bd384f91bfb04198969a2952"
    },
    'offscreenImgOrigins': {
      numOrigins: 2704,
      data: [70, 30],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3774c9bed78241c493e2917424ebd62d'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 1201,
      data: [15, 33, 52],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:7a211590edee4a2c871ca0ce86c772d7'
    },
    'firstInputDelayCrux': {
      numOrigins: 828,
      data: [75, 15, 10],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c835a2caf16c423ca6f411952cf0d967'
    },
    'timeToInteractive': {
      numOrigins: 2710,
      data: [11.2, 18.4, 30.1],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:45794c0c1d3e4f7db0f2aaf098cd5467'
    }
  }
}