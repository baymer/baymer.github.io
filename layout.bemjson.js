({
    block: 'page',
    title: 'Lyaout',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_layout.css', ie: false },
        { elem: 'css', url: '_layout', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: 'my layout tests' }},
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }}
    ],
    content:[
        {
            block: 'wrapper',
            content: [
                {
                    block: 'prefer',
                    content: [
                        {
                            elem: 'important',
                            content: 'важное'
                        },
                        {
                            elem: 'group',
                            elemMods: {
                                source: 'social'
                            }
                        },
                        {
                            elem: 'group',
                            elemMods: {
                                source: 'rubrics'
                            }
                        },
                        {
                            elem: 'group',
                            elemMods: {
                                source: 'favorites'
                            }
                        },
                        {
                            elem: 'group',
                            elemMods: {
                                source: 'search'
                            }
                        },
                        {
                            elem: 'group',
                            elemMods: {
                                source: 'feeds'
                            }
                        },
                        {
                            elem: 'edit'
                        }
                    ]
                },
                {
                    block: 'layout',
                    mods: {
                        columns: 4
                    },
                    js: 'yes',
                    content: [
                        {
                            elem: 'col',
                            elemMods: {
                                size: 'big'
                            },
                            content: [
                                {
                                    elem: 'cel',
                                    elemMods: {
                                        main: 'yes'
                                    }
                                },
                                {
                                    elem: 'col'
                                },
                                {
                                    elem: 'col'
                                }
                            ]
                        },
                        {
                            elem: 'col'
                        },
                        {
                            elem: 'col'
                        }
                    ]

                }
            ]
        },
        { elem: 'js', url: '_layout.js' }
    ]
})
