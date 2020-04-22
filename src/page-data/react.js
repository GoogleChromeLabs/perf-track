/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import TotalBytesBreakdown from "../data/react/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/react/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/react/all/img-bytes-breakdown";
import TotalBytesComparison from "../data/react/all/total-bytes-comparison";
import JSBytesComparison from "../data/react/all/js-bytes-comparison";

import TotalBytesBreakdownNoJquery from "../data/react/jquery/total-bytes-breakdown";
import JSBytesBreakdownNoJquery from "../data/react/jquery/js-bytes-breakdown";
import ImgBytesBreakdownNoJquery from "../data/react/jquery/img-bytes-breakdown";
import TotalBytesComparisonNoJquery from "../data/react/jquery/total-bytes-comparison";
import JSBytesComparisonNoJquery from "../data/react/jquery/js-bytes-comparison";

import TotalBytesBreakdownNext from "../data/react/next/total-bytes-breakdown";
import JSBytesBreakdownNext from "../data/react/next/js-bytes-breakdown";
import ImgBytesBreakdownNext from "../data/react/next/img-bytes-breakdown";
import TotalBytesComparisonNext from "../data/react/next/total-bytes-comparison";
import JSBytesComparisonNext from "../data/react/next/js-bytes-comparison";

export const headerOptions = [
  'All React sites',
  'React sites without jQuery',
  'React sites with Next.js'
];

export const data = {
  [headerOptions[0]]: {
    'totalNumOrigins': {
      value: 192126,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:b95de8970e3247088e54c0720f6e9d32'
    },
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
    'compressedRequests': {
      numOrigins: 152956,
      numRequests: 2621508,
      gzipCompressedPercent: 69,
      brotliCompressedPercent: 6,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:2a6736c9abee43ad8ae9d1ea6a15adfd'
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
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:097921edcc9e430688046e3566c83c0b'
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
    'firstContentfulPaintCrux': {
      numOrigins: 64167,
      data: [15, 31, 54],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:e078daeab8ec4d8ba4a9ddd4fe59d036'
    },
    'firstInputDelayCrux': {
      numOrigins: 38248,
      data: [75, 16, 9],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:bc0bc7823ded4431a6d34f3c90944274'
      
    },
    'timeToInteractive': {
      numOrigins: 192126,
      data: [18.0, 25.7, 35.8],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:6e4aba840666471789709922be0324a4'
    },
    'firstContentfulPaint': {
      numOrigins: 192126,
      data: [3.45, 4.86, 6.89],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:b90182986d52464c833848c929394c71'
    }
  },
  [headerOptions[1]]: {
    'totalNumOrigins': {
      value: 82625,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:4d73a090d720405991b2dfe94dbb85e5'
    },
    'totalBytesPercentile': {
      numOrigins: 82625,
      data: [2290, 3267, 4568],
      query: 'https://bigquery.cloud.google.com/savedquery/7475840913:c010625c398b4f8e9b393653b6df3ac8'
    },
    'totalBytesBreakdown': {
      numOrigins: 82625,
      data: TotalBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:499dc3c9436a4fb587e3c7e634828f5a'
    },
    'totalBytesComparison': {
      data: TotalBytesComparisonNoJquery
    },
    'compressedRequests': {
      numOrigins: 63666,
      numRequests: 514468,
      gzipCompressedPercent: 59,
      brotliCompressedPercent: 8,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:460377ab25434c4faece6955a7bc4c2a'
    },
    'jsBytesPercentile': {
      numOrigins: 82625,
      data: [1229, 1848, 2325],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:ca1f986a3e7e4a089063a84446c9e686'
    },
    'jsBytesBreakdown': {
      numOrigins: 82625,
      data: JSBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:53f0119dc2e34f5ba59c3e3a483a0295'
    },
    'jsBytesComparison': {
      numOrigins: 82625,
      data: JSBytesComparisonNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:53f0119dc2e34f5ba59c3e3a483a0295'
    },
    'imgBytesPercentile': {
      numOrigins: 82625,
      data: [476, 1063, 2129],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:31030f8f37a04638807de77af8e1c85d'
    },
    'imgBytesBreakdown': {
      numOrigins: 82625,
      data: ImgBytesBreakdownNoJquery,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f7cd9b82f8b54ac590c7af19fffb34c1'
    },
    'optimizedImgOrigins': {
      numOrigins: 82333,
      data: [85, 15],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:78465819b7f64af08afdbcd22391942b"
    },
    'responsiveImgOrigins': {
      numOrigins: 82416,
      data: [87, 13],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:b2fccb8f4b294ae9a25e51140046e7b1"
    },
    'nextGenImgOrigins': {
      numOrigins: 82333,
      data: [67, 33],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:15e2abb817ad46ae999ff0804435b6d9"
    },
    'offscreenImgOrigins': {
      numOrigins: 82416,
      data: [70, 30],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:37aaad2a0fb947bf8080bee62a3b904c'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 23408,
      data: [11, 31, 58],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c20e8b5c2c2d446397a01350acc07225'
    },
    'firstInputDelayCrux': {
      numOrigins: 12995,
      data: [73, 16, 11],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:017b49a4ed79433ca2b6050cd11a85f2'
    },
    'timeToInteractive': {
      numOrigins: 82625,
      data: [16.3, 23.7, 33.1],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3d4c0bc7e31f4eb9828d7335926cadb4'
    },
    'firstContentfulPaint': {
      numOrigins: 82625,
      data: [3.12, 4.35, 6.25],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:0636a8d8692b4ed2b639e73094cf4317'
    }
  },
  [headerOptions[2]]: {
    'totalNumOrigins': {
      value: 3413,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:57070dfd9c0b47149c91087a1bde9b87'
    },
    'totalBytesPercentile': {
      numOrigins: 3413,
      data: [2339, 3671, 5209],
      query: 'https://bigquery.cloud.google.com/savedquery/7475840913:6c159ac55ee54f2aba760546f96eb526'
    },
    'totalBytesBreakdown': {
      numOrigins: 3413,
      data: TotalBytesBreakdownNext,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8427f4798abc4b8daeb3f80e4c32ee12'
    },
    'totalBytesComparison': {
      data: TotalBytesComparisonNext
    },
    'compressedRequests': {
      numOrigins: 1728,
      numRequests: 23332,
      gzipCompressedPercent: 53,
      brotliCompressedPercent: 8,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:baae7a9a9b004f74ba420fc6ce5970fc'
    },
    'jsBytesPercentile': {
      numOrigins: 3413,
      data: [706, 959, 1396],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:00fe756377f84ec2a1c3dac3e21426f3'
    },
    'jsBytesBreakdown': {
      numOrigins: 3413,
      data: JSBytesBreakdownNext,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f9c8807aa61741d68d74e40732888eae'
    },
    'jsBytesComparison': {
      numOrigins: 3413,
      data: JSBytesComparisonNext,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f9c8807aa61741d68d74e40732888eae'
    },
    'imgBytesPercentile': {
      numOrigins: 3413,
      data: [879, 1406, 3295],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:0392f2255e7742a5a31cd5ef58c18d43'
    },
    'imgBytesBreakdown': {
      numOrigins: 3413,
      data: ImgBytesBreakdownNext,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:a148670a543a496285c73c709df7cc1d'
    },
    'optimizedImgOrigins': {
      numOrigins: 3386,
      data: [84, 16],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:de11ca0f10c64503805d0f4fd7d8be65"
    },
    'responsiveImgOrigins': {
      numOrigins: 3399,
      data: [75, 25],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:e756d3e4ac6f424484ad1052b2a9d7f3"
    },
    'nextGenImgOrigins': {
      numOrigins: 3386,
      data: [40, 60],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:dd017dc1986046dc9d4b9b1931f74f76"
    },
    'offscreenImgOrigins': {
      numOrigins: 3399,
      data: [70, 30],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:899e6169f18c4ab287dfead6a2b1fe9b'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 1497,
      data: [14, 35, 51],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:9148086d537e485b82f90d96e71dd8c3'
    },
    'firstInputDelayCrux': {
      numOrigins: 1013,
      data: [77, 15, 8],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:a9f0d28f7e7c4c43ba89f7da4d0e5e57'
    },
    'timeToInteractive': {
      numOrigins: 3413,
      data: [12.9, 18.6, 25.8],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:d7ae4a69cd6b4948a38305c024f80b6c'
    },
    'firstContentfulPaint': {
      numOrigins: 3413,
      data: [3.32, 4.79, 6.99],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:539a8da5a8e849108908d8913deaec5f'
    }
  }
}