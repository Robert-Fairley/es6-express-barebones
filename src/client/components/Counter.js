import Component from './primitives/Component';

/**
 * @class Counter
 * @classdesc A basic counter to demonstrate front end javascript
 */
class Counter extends Component
{
    /**
     * @constructor
     * @param {object} props Properties object. Contains a default name. Override for different greeting. 
     */
    constructor(props = { name: 'World' })
    {
        super(props);

        this.hello = `Hello, ${props.name}!`;
        this.state = { count: 0, };
    }

    /**
     * @method increasecount
     * @desc Increase the counter by one
     * @param {Event} event 
     * @param {HTMLElement} _count 
     */
    increaseCount(event, _count)
    {
        this.state.count += 1;
        _count.setAttribute('aria-describedby', `${this.state.count}`);
        _count.innerText = this.state.count;
    }

    /**
     * @method decreaseCount
     * @desc Decrease the counter by one
     * @param {Event} event 
     * @param {HTMLElement} _count 
     */
    decreaseCount(event, _count)
    {
        this.state.count -= 1;
        _count.setAttribute('aria-describedby', `${this.state.count}`);
        _count.innerText = this.state.count;
    }

    /**
     * @method render
     * @desc Mount the component to the provided container, or falling back onto a default
     * @param {HTMLElement} _componentContainer 
     */
    render(_componentContainer = document.querySelector('#root'))
    {
        let container = document.createElement('div');
        let count     = document.createElement('div');
        let controls  = document.createElement('div');
        let message   = document.createElement('div');
        let btnUp     = document.createElement('button');
        let btnDn     = document.createElement('button');

        /** Set up **/
        container.classList.add('counter');
        count.classList.add('count');
        controls.classList.add('controls');
        message.classList.add('message');

        container.setAttribute('aria-label', 'Counter');
        container.setAttribute('role', 'Counter Widget');
        count.setAttribute('aria-label', 'Count');
        count.setAttribute('role', 'Count');
        controls.setAttribute('aria-label', 'Counter Controls');
        controls.setAttribute('role', 'Counter Controls');
        message.setAttribute('aria-label', 'Greeting');
        message.setAttribute('role', 'Counter Heading');
        btnUp.setAttribute('aria-label', 'Increase Count');
        btnUp.setAttribute('role', 'button');
        btnDn.setAttribute('aria-label', 'Decrease Count');
        btnDn.setAttribute('role', 'button');

        btnUp.innerText = '++';
        btnDn.innerText = '--';
        message.innerText = this.hello;
        count.innerText = this.state.count;

        /** Set up actions */
        btnUp.addEventListener('click', e => this.increaseCount(e, count));
        btnDn.addEventListener('click', e => this.decreaseCount(e, count));

        /** Assemble Elements */
        controls.appendChild(btnUp);
        controls.appendChild(btnDn);

        container.appendChild(message);
        container.appendChild(count);
        container.appendChild(controls);

        /** Mount the app to the component container */
        _componentContainer.appendChild(container);
    }
    
}

export default Counter;
