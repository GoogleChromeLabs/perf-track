import TotalBytesBreakdown from "../data/react/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/react/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/react/all/img-bytes-breakdown";
import TotalBytesComparison from "../data/react/all/total-bytes-comparison";
import JSBytesComparison from "../data/react/all/js-bytes-comparison";

import TotalBytesBreakdownNoJquery from "../data/angular/jquery/total-bytes-breakdown";
import JSBytesBreakdownNoJquery from "../data/angular/jquery/js-bytes-breakdown";
import ImgBytesBreakdownNoJquery from "../data/angular/jquery/img-bytes-breakdown";
import TotalBytesComparisonNoJquery from "../data/angular/jquery/total-bytes-comparison";
import JSBytesComparisonNoJquery from "../data/angular/jquery/js-bytes-comparison";

export const headerOptions = [
  'All Vue sites',
  'Vue sites without jQuery',
  'Vue and Nuxt.js sites'
];

export const data = {
  [headerOptions[0]]: {
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
    'firstContentfulPaint': {
      numOrigins: 22265,
      data: [22, 35, 43],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f4b043ff03f641fbb50f1f04ff7da120'
    },
    'firstInputDelay': {
      numOrigins: 14095,
      data: [79, 14, 7],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:7d748d4dc05e4f0a95e4573b6d670d13'
      
    },
    'timeToInteractive': {
      numOrigins: 52658,
      data: [20.6, 31.6, 56.6],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:247ca0aa0b374fbab6873544f685f36c'
    }
  },
  [headerOptions[1]]: {
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
    'firstContentfulPaint': {
      numOrigins: 2382,
      data: [16, 29, 55],
      query: "https://bigquery.cloud.google.com/savedquery/7475840913:6a1caae5a7904594bf268975de713c8b"
    },
    'firstInputDelay': {
      numOrigins: 1707,
      data: [79, 14, 7],
      query: "https://bigquery.cloud.google.com/savedquery/7475840913:c166d8d8fa0343efaa4ea20b6b3ba55b"
    },
    'timeToInteractive': {
      numOrigins: 5239,
      data: [17.0, 25.1, 44.8],
      query: "https://bigquery.cloud.google.com/savedquery/7475840913:e54c12c651de4ba6b3a7a9e6b609befe"
    }
  }
}