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
  'Preact'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 165864,
      all: 6903239
    },
    'compressedRequests': {
      numUrls: 150610,
      numRequests: 8845765,
      gzipCompressedPercent: 61.1,
      brotliCompressedPercent: 21.8
    },
    'totalBytesBreakdown': {
      numUrls: 165864,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.07, 0.40, 1.27, 2.18, 4.39, 91.68]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 165864,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.66, 7.76, 16.84, 18.53, 14.39, 40.83]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 165864,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [12.30, 10.69, 9.90, 8.75, 7.30, 51.07]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 136290,
      data: [66, 19, 15],
    },
    'lcpCrux': {
      numOrigins: 135233,
      data: [66, 18, 16],
    },
    'fidCrux': {
      numOrigins: 116427,
      data: [86, 10, 4],
    },
    'clsCrux': {
      numOrigins: 134568,
      data: [69, 9, 22],
    },
    'ttfbCrux': {
      numOrigins: 135207,
      data: [49, 35, 15],
    },
  }
}
