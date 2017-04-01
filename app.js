import hyperquext from 'hyperquext';
import { agents } from './data/agentStore.json';
// import phantomjs from 'phantomjs-prebuilt';

const hyperquextDirect = hyperquext.decorators.hyperquextDirect;
const r = hyperquextDirect(hyperquext);
// const wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };

r('http://www.google.com', {headers: agents[1], maxRedirects: 10}, (err, res) => {
	console.log(agents[1]);
	console.log(res.statusCode, res.statusMessage);
	console.log(res.request.uri, "\n");
});
