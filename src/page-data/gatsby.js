import TotalBytesBreakdown from "../data/gatsby/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/gatsby/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/gatsby/all/img-bytes-breakdown";
import TotalBytesComparison from "../data/gatsby/all/total-bytes-comparison";
import JSBytesComparison from "../data/gatsby/all/js-bytes-comparison";

export const headerOptions = [
  'All Gatsby sites',
];

export const data = {
  [headerOptions[0]]: {
    'totalNumOrigins': {
      value: 1739,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:448e9e9c152341acb90c7fd25058b369'
    },
    'totalBytesPercentile': {
      numOrigins: 1739,
      data: [1612, 2996, 5318],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:5673bea56ae5455e93569665eb4850ee'
    },
    'totalBytesBreakdown': {
      numOrigins: 1739,
      data: TotalBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3e228893bbf4425c8549a8720fcd82e8'
    },
    'totalBytesComparison': {
      data: TotalBytesComparison
    },
    'compressedRequests': {
      numOrigins: 912,
      numRequests: 7553,
      gzipCompressedPercent: 62,
      brotliCompressedPercent: 7,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:71c65dfeb0dd4954a7623f05da3d119e'
    },
    'jsBytesPercentile': {
      numOrigins: 1739,
      data: [513, 830, 1240],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:b2633f5608ff496da0d3f19f67bd557f'
    },
    'jsBytesBreakdown': {
      numOrigins: 1739,
      data: JSBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:bf493c27c2e84928a05885102fce1870'
    },
    'jsBytesComparison': {
      numOrigins: 1739,
      data: JSBytesComparison,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:bf493c27c2e84928a05885102fce1870'
    },
    'imgBytesPercentile': {
      numOrigins: 1739,
      data: [485, 1507, 3043],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c7e85693bfb34f0bbc042f8bcec82e38'
    },
    'imgBytesBreakdown': {
      numOrigins: 1739,
      data: ImgBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:d1a83d90083d4d9bb2b0510fbc6e48f5'
    },
    'optimizedImgOrigins': {
      numOrigins: 1731,
      data: [84, 16],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:e97bcd6c418e4c219eb4151488f34c18"
    },
    'responsiveImgOrigins': {
      numOrigins: 1735,
      data: [70, 30],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:719fb87d9a2b44cc92ab6d82f43a7325"
    },
    'nextGenImgOrigins': {
      numOrigins: 1731,
      data: [54, 46],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:5df0cb40d7d84a9799d5a243213fe386"
    },
    'offscreenImgOrigins': {
      numOrigins: 1735,
      data: [83, 17],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:f064dcbee678467fae55e4ade09e2e01'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 610,
      data: [21, 33, 46],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:6fc9ecaada3c4752827d46ae17ae8c63'
    },
    'firstInputDelayCrux': {
      numOrigins: 379,
      data: [80, 14, 6],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:78de6798fe8d4f37bc37485af138b375'
    },
    'timeToInteractive': {
      numOrigins: 1739,
      data: [7.9, 14.0, 22.3],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3d58a61a5f4f472abfa4a5b0f775ead0'
    },
    'firstContentfulPaint': {
      numOrigins: 1739,
      data: [2.35, 3.3, 4.56],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:512afa643b1a456db32b989a5c6c3361'
    }
  }
}