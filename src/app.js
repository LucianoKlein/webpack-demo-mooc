import './css/common.css';
import layer from './components/layer/layer';
import $ from 'jquery';

const App = function() {
    let $dom = $('#app');
    let ly = layer();
    $dom.html(ly.tpl({
        name: 'john',
        arr: ['apple', 'xiaomi', 'oppo']
    }));
}

new App();