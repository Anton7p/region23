/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {

        config.module.rules.push({
            loader: '@svgr/webpack',
            options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                override: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                },
                titleProp: true,
            },
            test: /\.svg$/,
        });


        return config;
    },
}

module.exports = nextConfig
