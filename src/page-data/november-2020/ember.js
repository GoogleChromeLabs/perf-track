/**
 * Copyright 2021 Google LLC
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
  'Ember'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 17034,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 4493,
      numRequests: 142629,
      gzipCompressedPercent: 49.6,
      brotliCompressedPercent: 33.5
    },
    'totalBytesBreakdown': {
      numUrls: 17034,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.01, 0.11, 0.22, 0.58, 5.87, 93.20]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 17034,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.03, 0.53, 1.02, 8.94, 5.52, 83.97]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 17034,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [56.35, 25.16, 7.98, 3.08, 1.26, 6.18]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 14865,
      data: [69, 16, 15],
    },
    'lcpCrux': {
      numOrigins: 14484,
      data: [56, 22, 22],
    },
    'fidCrux': {
      numOrigins: 12291,
      data: [87, 9, 4],
    },
    'clsCrux': {
      numOrigins: 14806,
      data: [48, 14, 39],
    },
    'ttfbCrux': {
      numOrigins: 14848,
      data: [60, 33, 7],
    },
  }
}
