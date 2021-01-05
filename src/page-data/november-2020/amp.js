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
  'AMP'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 68370,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 58191,
      numRequests: 2158619,
      gzipCompressedPercent: 55.6,
      brotliCompressedPercent: 28.9
    },
    'totalBytesBreakdown': {
      numUrls: 68369,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [2.09, 8.25, 9.34, 9.45, 10.43, 60.44]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 68369,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.09, 25.57, 18.48, 11.22, 6.58, 12.06]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 68369,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [27.42, 18.18, 9.48, 6.69, 5.18, 33.05]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 53227,
      data: [61, 19, 20],
    },
    'lcpCrux': {
      numOrigins: 52727,
      data: [66, 17, 17],
    },
    'fidCrux': {
      numOrigins: 39752,
      data: [89, 9, 3],
    },
    'clsCrux': {
      numOrigins: 52274,
      data: [74, 8, 19],
    },
    'ttfbCrux': {
      numOrigins: 48395,
      data: [45, 31, 24]
    },
  }
}
