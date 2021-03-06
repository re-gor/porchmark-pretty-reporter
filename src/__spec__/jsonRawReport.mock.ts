import { IJsonRawReport } from '../types/porchmark';

export default <IJsonRawReport>({
    "sites": [
        {
            "name": "site0",
            "url": "https://goodOldRockNRoll.dead",
        },
        {
            "name": "site1",
            "url": "https://iDontCare.wohoho",
        }
    ],
    "metrics": [
        {
            "name": "requestStart"
        },
        {
            "name": "responseStart",
            "title": "TTFB"
        },
        {
            "name": "responseEnd",
            "title": "TTLB"
        },
        {
            "name": "first-paint"
        },
        {
            "name": "first-contentful-paint",
            "title": "FCP"
        },
        {
            "name": "domContentLoadedEventEnd",
            "title": "DCL"
        },
        {
            "name": "loadEventEnd",
            "title": "loaded"
        },
        {
            "name": "domInteractive"
        },
        {
            "name": "domComplete"
        },
        {
            "name": "transferSize"
        },
        {
            "name": "encodedBodySize"
        },
        {
            "name": "decodedBodySize"
        }
    ],
    "metricAggregations": [
        {
            "name": "count",
            "includeMetrics": [
                "requestStart"
            ]
        },
        {
            "name": "q50"
        },
        {
            "name": "q80"
        },
        {
            "name": "q95"
        }
    ],
    "data": {
        "allMetrics": {
            "decodedBodySize": {
                "site0": [
                    957284,
                    957284,
                    953257,
                    953257,
                ],
                "site1": [
                    957683,
                    957683,
                    953658,
                    953658,
                ],
            },
            "domComplete": {
                "site0": [
                    1457.0850000018254,
                    1353.464999992866,
                    1503.1299999682233,
                    1146.4750000159256,
                ],
                "site1": [
                    1485.6150000123307,
                    1176.8100000335835,
                    1432.5650000246242,
                    1162.9800000227988,
                ],
            },
            "domContentLoadedEventEnd": {
                "site0": [
                    964.1500000143424,
                    874.7599999769591,
                    1054.00499998359,
                    894.875000056345,
                ],
                "site1": [
                    996.2400000076741,
                    900.4950000089593,
                    934.8899999749847,
                    872.6049999822862,
                ],
            },
            "domInteractive": {
                "site0": [
                    456.8100000033155,
                    413.46999997040257,
                    576.5999999712221,
                    425.7950000464916,
                ],
                "site1": [
                    507.4449999956414,
                    448.1699999887496,
                    430.3749999962747,
                    408.99999998509884,
                ],
            },
            "encodedBodySize": {
                "site0": [
                    131372,
                    131372,
                    130807,
                    130807,
                ],
                "site1": [
                    131662,
                    131662,
                    131807,
                    131807,
                ],
            },
            "first-contentful-paint": {
                "site0": [
                    457.43499998934567,
                    171.13499995321035,
                    316.1149999941699,
                    177.55500000203028,
                ],
                "site1": [
                    375.47000002814457,
                    151.86000004177913,
                    389.54499998362735,
                    174.5750000118278,
                ],
            },
            "first-paint": {
                "site0": [
                    457.43499998934567,
                    171.13499995321035,
                    316.1149999941699,
                    177.55500000203028,
                ],
                "site1": [
                    375.47000002814457,
                    151.86000004177913,
                    389.54499998362735,
                    174.5750000118278,
                ],
            },
            "loadEventEnd": {
                "site0": [
                    1463.3599999942817,
                    1359.8499999498017,
                    1509.2799999983981,
                    1152.4800000479445,
                ],
                "site1": [
                    1491.7150000110269,
                    1182.4900000356138,
                    1438.704999978654,
                    1169.2799999727868,
                ],
            },
            "requestStart": {
                "site0": [
                    9.789999981876463,
                    0.6899999571032822,
                    10.089999996125698,
                    0.7000000332482159,
                ],
                "site1": [
                    10.565000004135072,
                    0.754999986384064,
                    11.140000016894192,
                    0.7200000109151006,
                ],
            },
            "responseEnd": {
                "site0": [
                    68.91500001074746,
                    51.95499997353181,
                    65.7449999707751,
                    50.81500002415851,
                ],
                "site1": [
                    67.19500001054257,
                    53.88000002130866,
                    66.53000001097098,
                    51.98499996913597,
                ],
            },
            "responseStart": {
                "site0": [
                    35.435000027064234,
                    22.594999987632036,
                    34.63999996893108,
                    22.015000053215772,
                ],
                "site1": [
                    35.66500003216788,
                    24.42999999038875,
                    37.1199999935925,
                    22.409999975934625,
                ],
            },
            "transferSize": {
                "site0": [
                    135062,
                    135062,
                    134560,
                    134560,
                ],
                "site1": [
                    135408,
                    135408,
                    135485,
                    135485,
                ],
            },
        },
        "metrics": {
            "requestStart": {
                "count": {
                    "site0": 4,
                    "site1": 4
                },
                "q50": {
                    "site0": 5.245000007562339,
                    "site1": 5.659999995259568
                },
                "q80": {
                    "site0": 9.789999981876463,
                    "site1": 10.565000004135072
                },
                "q95": {
                    "site0": 9.789999981876463,
                    "site1": 10.565000004135072
                }
            },
            "responseStart": {
                "q50": {
                    "site0": 28.617499978281558,
                    "site1": 30.047500011278316
                },
                "q80": {
                    "site0": 34.63999996893108,
                    "site1": 35.66500003216788
                },
                "q95": {
                    "site0": 34.63999996893108,
                    "site1": 35.66500003216788
                }
            },
            "responseEnd": {
                "q50": {
                    "site0": 58.849999972153455,
                    "site1": 60.20500001613982
                },
                "q80": {
                    "site0": 65.7449999707751,
                    "site1": 66.53000001097098
                },
                "q95": {
                    "site0": 65.7449999707751,
                    "site1": 66.53000001097098
                }
            },
            "first-paint": {
                "q50": {
                    "site0": 246.8349999981001,
                    "site1": 275.0225000199862
                },
                "q80": {
                    "site0": 316.1149999941699,
                    "site1": 375.47000002814457
                },
                "q95": {
                    "site0": 316.1149999941699,
                    "site1": 375.47000002814457
                }
            },
            "first-contentful-paint": {
                "q50": {
                    "site0": 246.8349999981001,
                    "site1": 275.0225000199862
                },
                "q80": {
                    "site0": 316.1149999941699,
                    "site1": 375.47000002814457
                },
                "q95": {
                    "site0": 316.1149999941699,
                    "site1": 375.47000002814457
                }
            },
            "domContentLoadedEventEnd": {
                "q50": {
                    "site0": 929.5125000353437,
                    "site1": 917.692499991972
                },
                "q80": {
                    "site0": 964.1500000143424,
                    "site1": 934.8899999749847
                },
                "q95": {
                    "site0": 964.1500000143424,
                    "site1": 934.8899999749847
                }
            },
            "loadEventEnd": {
                "q50": {
                    "site0": 1411.6049999720417,
                    "site1": 1310.597500007134
                },
                "q80": {
                    "site0": 1463.3599999942817,
                    "site1": 1438.704999978654
                },
                "q95": {
                    "site0": 1463.3599999942817,
                    "site1": 1438.704999978654
                }
            },
            "domInteractive": {
                "q50": {
                    "site0": 441.30250002490357,
                    "site1": 439.27249999251217
                },
                "q80": {
                    "site0": 456.8100000033155,
                    "site1": 448.1699999887496
                },
                "q95": {
                    "site0": 456.8100000033155,
                    "site1": 448.1699999887496
                }
            },
            "domComplete": {
                "q50": {
                    "site0": 1405.2749999973457,
                    "site1": 1304.6875000291038
                },
                "q80": {
                    "site0": 1457.0850000018254,
                    "site1": 1432.5650000246242
                },
                "q95": {
                    "site0": 1457.0850000018254,
                    "site1": 1432.5650000246242
                }
            },
            "transferSize": {
                "q50": {
                    "site0": 134811,
                    "site1": 135446.5
                },
                "q80": {
                    "site0": 135062,
                    "site1": 135485
                },
                "q95": {
                    "site0": 135062,
                    "site1": 135485
                }
            },
            "encodedBodySize": {
                "q50": {
                    "site0": 131089.5,
                    "site1": 131734.5
                },
                "q80": {
                    "site0": 131372,
                    "site1": 131807
                },
                "q95": {
                    "site0": 131372,
                    "site1": 131807
                }
            },
            "decodedBodySize": {
                "q50": {
                    "site0": 955270.5,
                    "site1": 955670.5
                },
                "q80": {
                    "site0": 957284,
                    "site1": 957683
                },
                "q95": {
                    "site0": 957284,
                    "site1": 957683
                }
            }
        },
        "diffs": {
            "requestStart": {
                "count": {
                    "site1": 0
                },
                "q50": {
                    "site1": 0.4149999876972288
                },
                "q80": {
                    "site1": 0.7750000222586095
                },
                "q95": {
                    "site1": 0.7750000222586095
                }
            },
            "responseStart": {
                "q50": {
                    "site1": 1.4300000329967588
                },
                "q80": {
                    "site1": 1.0250000632368028
                },
                "q95": {
                    "site1": 1.0250000632368028
                }
            },
            "responseEnd": {
                "q50": {
                    "site1": 1.3550000439863652
                },
                "q80": {
                    "site1": 0.7850000401958823
                },
                "q95": {
                    "site1": 0.7850000401958823
                }
            },
            "first-paint": {
                "q50": {
                    "site1": 28.18750002188608
                },
                "q80": {
                    "site1": 59.35500003397465
                },
                "q95": {
                    "site1": 59.35500003397465
                }
            },
            "first-contentful-paint": {
                "q50": {
                    "site1": 28.18750002188608
                },
                "q80": {
                    "site1": 59.35500003397465
                },
                "q95": {
                    "site1": 59.35500003397465
                }
            },
            "domContentLoadedEventEnd": {
                "q50": {
                    "site1": -11.820000043371692
                },
                "q80": {
                    "site1": -29.260000039357692
                },
                "q95": {
                    "site1": -29.260000039357692
                }
            },
            "loadEventEnd": {
                "q50": {
                    "site1": -101.00749996490777
                },
                "q80": {
                    "site1": -24.655000015627593
                },
                "q95": {
                    "site1": -24.655000015627593
                }
            },
            "domInteractive": {
                "q50": {
                    "site1": -2.030000032391399
                },
                "q80": {
                    "site1": -8.640000014565885
                },
                "q95": {
                    "site1": -8.640000014565885
                }
            },
            "domComplete": {
                "q50": {
                    "site1": -100.5874999682419
                },
                "q80": {
                    "site1": -24.519999977201223
                },
                "q95": {
                    "site1": -24.519999977201223
                }
            },
            "transferSize": {
                "q50": {
                    "site1": 635.5
                },
                "q80": {
                    "site1": 423
                },
                "q95": {
                    "site1": 423
                }
            },
            "encodedBodySize": {
                "q50": {
                    "site1": 645
                },
                "q80": {
                    "site1": 435
                },
                "q95": {
                    "site1": 435
                }
            },
            "decodedBodySize": {
                "q50": {
                    "site1": 400
                },
                "q80": {
                    "site1": 399
                },
                "q95": {
                    "site1": 399
                }
            }
        }
    }
})
