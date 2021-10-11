// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderShoes } from '../render-shoes.js';
import { shoes } from '../shoes.js';

const test = QUnit.test;

test('renderShoes should output HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="shoe-card"><h2>Nike ZoomX Vaporfly Next% 2</h2><img src="./assets/next.jpeg"><p>$250</p><button>add to cart</button></div>';
    const next = shoes[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoes(next).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('renderShoes should output HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="shoe-card"><h2>Nike Air Zoom Pegasus 38</h2><img src="./assets/pegasus.jpeg"><p>$120</p><button>add to cart</button></div>';
    const pegasus = shoes[1];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoes(pegasus).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
