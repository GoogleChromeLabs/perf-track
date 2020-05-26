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

export const category = [
  'Polymer'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 810,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 464,
      numRequests: 19824,
      gzipCompressedPercent: 70.4,
      brotliCompressedPercent: 10.9
    },
    'totalBytesBreakdown': {
      numUrls: 810,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.49, 1.73, 10.12, 4.81, 7.90, 74.94]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 810,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.54, 17.65, 15.06, 15.56, 7.53, 17.65]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 810,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [28.64, 10.12, 6.54, 6.54, 4.44, 43.70]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 363,
      data: [30, 33, 37],
    },
    'lcpCrux': {
      numOrigins: 352,
      data: [27, 24, 49],
    },
    'fidCrux': {
      numOrigins: 251,
      data: [84, 12, 4],
    },
    'clsCrux': {
      numOrigins: 360,
      data: [56, 7, 37],
    },
    'ttfbCrux': {
      numOrigins: 362,
      data: [26, 27, 47],
    },
  }
}
