exports.blocks = [
    {
        "name": "page",
        "elems": [
            {
                "name": "css"
            },
            {
                "name": "meta"
            },
            {
                "name": "js"
            }
        ]
    },
    {
        "name": "wrapper"
    },
    {
        "name": "prefer",
        "elems": [
            {
                "name": "important"
            },
            {
                "name": "group",
                "mods": [
                    {
                        "name": "source",
                        "vals": [
                            "social",
                            "rubrics",
                            "favorites",
                            "search",
                            "feeds"
                        ]
                    }
                ]
            },
            {
                "name": "edit"
            }
        ]
    },
    {
        "name": "layout",
        "mods": [
            {
                "name": "columns",
                "vals": [
                    4
                ]
            }
        ],
        "elems": [
            {
                "name": "col",
                "mods": [
                    {
                        "name": "size",
                        "vals": [
                            "big"
                        ]
                    }
                ]
            },
            {
                "name": "cel",
                "mods": [
                    {
                        "name": "main",
                        "vals": [
                            "yes"
                        ]
                    }
                ]
            }
        ]
    }
];
