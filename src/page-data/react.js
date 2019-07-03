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
  'All React sites',
  'React sites without jQuery',
  'React and Next.js sites'
];

export const data = {
  [headerOptions[0]]: {
    'totalBytesPercentile': {
      numOrigins: 192126,
      data: [2369, 3637, 5653],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:95a2eb884e7a4e93ad3667a6c1461dbb'
    },
    'totalBytesBreakdown': {
      numOrigins: 192126,
      data: TotalBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:767d94fa2f6a4d3bb275a6d849ba734f'
    },
    'totalBytesComparison': {
      data: TotalBytesComparison
    },
    'jsBytesPercentile': {
      numOrigins: 192126,
      data: [1083, 1544, 2031],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:1b58038b96584a43b9c7e8464825f496'
    },
    'jsBytesBreakdown': {
      numOrigins: 192126,
      data: JSBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:71d6a9d20cc74d14ae5dbbf162223adc'
    },
    'jsBytesComparison': {
      numOrigins: 192126,
      data: JSBytesComparison,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:71d6a9d20cc74d14ae5dbbf162223adc'
    },
    'imgBytesPercentile': {
      numOrigins: 192126,
      data: [680, 1661, 3501],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:097921edcc9e430688046e3566c83c0'
    },
    'imgBytesBreakdown': {
      numOrigins: 192126,
      data: ImgBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:a90557c7547b4f8ca561ab5b79a578ff'
    },
    'optimizedImgOrigins': {
      numOrigins: 191385,
      data: [77, 23],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:d538ef8448cd4fe1b3a5fb6f419b2fa3"
    },
    'responsiveImgOrigins': {
      numOrigins: 191644,
      data: [74, 26],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:6e89c9558d3b407fae7ca9c88ef462b9"
    },
    'nextGenImgOrigins': {
      numOrigins: 191385,
      data: [47, 53],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:13f2f88a4070464394093c653f94a241"
    },
    'offscreenImgOrigins': {
      numOrigins: 191644,
      data: [57, 43],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f3af266bf78141a7a3603d9f78c0e2c5'
    },
    'firstContentfulPaint': {
      numOrigins: 64167,
      data: [15, 31, 54],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:5e2ba9a3296544aca6c662c4dc4af046'
    },
    'firstInputDelay': {
      numOrigins: 38248,
      data: [75, 16, 9],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:bc0bc7823ded4431a6d34f3c90944274'
      
    },
    'timeToInteractive': {
      numOrigins: 192126,
      data: [21.7, 31.9, 51.5],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:6e4aba840666471789709922be0324a4'
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