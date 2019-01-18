import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';


console.log('building prod');

webpack(webpackConfig).run((err, status) => {

    if(err){
        console.log(err)
        return 1;
    }


 return 0;
})