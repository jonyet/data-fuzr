import hyperquext from 'hyperquext';

const hyperquextDirect = hyperquext.decorators.hyperquextDirect;
const r = hyperquextDirect(hyperquext);
// const phantomjs = 'phantomjs-prebuilt';
// const wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };
const headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1588.0 Safari/537.36'
}

r('http://www.google.com', {headers: headers, maxRedirects: 10}, (err, res) => {
	console.log(res);
});
