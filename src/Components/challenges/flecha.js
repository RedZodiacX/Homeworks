const add = (a, b) => a + b;

const func = (...args) => {
    console.log(args);
};

class MyComponent extends React.Component {
    handleClick = () => {
        console.log(this);
    }

    render() {
        return <button onClick={this.handleClick}>Click me</button>;
    }
}

function add(a, b) {
    return a + b;
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
    }

    render() {
        return <button onClick={this.handleClick}>Click me</button>;
    }
}

function func() {
    console.log(arguments);
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
    }

    render() {
        return <button onClick={this.handleClick}>Click me</button>;
    }
}

// funcion regular
function funcionRegular(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

funcionRegular(3);
funcionRegular(4);

// funcion Flecha
const funcionFlecha = (number) => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
};

funcionFlecha(3);
funcionFlecha(4);
