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
  [headerOptions[2]]: {
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
  }
}