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
      framework: 9860,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 6718,
      numRequests: 112012,
      gzipCompressedPercent: 31.6,
      brotliCompressedPercent: 58.3
    },
    'totalBytesBreakdown': {
      numUrls: 9860,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [4.10, 16.99, 18.85, 16.15, 10.97, 32.94]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 9860,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [37.29, 42.84, 8.63, 4.84, 2.35, 4.05]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 9860,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [49.17, 18.59, 8.22, 5.40, 3.37, 15.26]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 5632,
      data: [34, 20, 46],
    },
    'lcpCrux': {
      numOrigins: 5494,
      data: [43, 19, 38],
    },
    'fidCrux': {
      numOrigins: 3790,
      data: [84, 13, 3],
    },
    'clsCrux': {
      numOrigins: 5578,
      data: [84, 5, 11],
    },
    'ttfbCrux': {
      numOrigins: 5619,
      data: [31, 32, 37]
    },
  }
}
