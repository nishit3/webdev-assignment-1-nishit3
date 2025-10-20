"use client";
import Image from "react-bootstrap/Image";

export default function Lab1() {
  return (
    <div id="wd-lab1" className="lab1-container">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag" className="lab1-section">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>
      <div id="wd-p-tag" className="lab1-section">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>
      <div id="wd-lists" className="lab1-section">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
          <li>Boil water in a large pot.</li>
          <li>Add pasta and cook until al dente.</li>
          <li>Heat olive oil in a pan and add garlic.</li>
          <li>Add tomatoes and herbs.</li>
          <li>Combine pasta with sauce.</li>
          <li>Serve with parmesan cheese.</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>The Martian</li>
          <li>Foundation</li>
          <li>Neuromancer</li>
          <li>Snow Crash</li>
          <li>The Left Hand of Darkness</li>
        </ul>
      </div>
      <div id="wd-tables" className="lab1-section">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/24/21</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Node.js</td>
              <td>2/17/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>MongoDB</td>
              <td>3/10/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Express</td>
              <td>3/17/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>APIs</td>
              <td>3/24/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Authentication</td>
              <td>3/31/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Deployment</td>
              <td>4/7/21</td>
              <td>91</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <Image
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
        <br />
        Loading a local image:
        <br />
        <Image
          id="wd-teslabot"
          src="/images/teslabot.jpeg"
          height="200px"
          alt="Tesla Bot"
        />
      </div>
      <div id="wd-forms" className="lab1-section">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="nishit.9" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            defaultValue="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input
            type="text"
            title="John"
            id="wd-text-fields-first-name"
            defaultValue="Nishit"
          />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            defaultValue="Chaudhary"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          <br />
          <br />
          <h5>Text boxes</h5>
          <label>Biography:</label>
          <br />
          <textarea
            id="wd-textarea"
            cols={30}
            rows={10}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></textarea>
          <br />
          <br />
          <h5 id="wd-buttons">Buttons</h5>
          <button
            type="button"
            onClick={() => alert("Life is Good!")}
            id="wd-all-good"
          >
            Hello World!
          </button>
          <br />
          <br />
          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label>
          <div className="radio-group">
            <div className="radio-item">
              <input type="radio" name="radio-genre" id="wd-radio-comedy" />
              <label htmlFor="wd-radio-comedy">Comedy</label>
            </div>
            <div className="radio-item">
              <input type="radio" name="radio-genre" id="wd-radio-drama" />
              <label htmlFor="wd-radio-drama">Drama</label>
            </div>
            <div className="radio-item">
              <input type="radio" name="radio-genre" id="wd-radio-scifi" />
              <label htmlFor="wd-radio-scifi">Science Fiction</label>
            </div>
            <div className="radio-item">
              <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
              <label htmlFor="wd-radio-fantasy">Fantasy</label>
            </div>
          </div>
          <br />
          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
              <label htmlFor="wd-chkbox-comedy">Comedy</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
              <label htmlFor="wd-chkbox-drama">Drama</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
              <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="check-genre"
                id="wd-chkbox-fantasy"
              />
              <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
            </div>
          </div>
          <br />
          <h4 id="wd-dropdowns">Dropdowns</h4>
          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
          <br />
          <select id="wd-select-one-genre" defaultValue="SCIFI">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <br />
          <br />
          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
          <br />
          <select
            multiple
            id="wd-select-many-genre"
            defaultValue={["COMEDY", "SCIFI"]}
          >
            <option value="COMEDY"> Comedy </option>
            <option value="DRAMA"> Drama </option>
            <option value="SCIFI"> Science Fiction </option>
            <option value="FANTASY"> Fantasy </option>
          </select>
          <br />
          <br />
          <h4>Custom Styled Form Controls</h4>
          <h5>Custom Radio Buttons</h5>
          <label>Preferred framework:</label>
          <div className="radio-group">
            <div className="radio-item">
              <div className="custom-radio">
                <input type="radio" name="framework" id="react" />
                <span className="checkmark"></span>
              </div>
              <label htmlFor="react">React</label>
            </div>
            <div className="radio-item">
              <div className="custom-radio">
                <input type="radio" name="framework" id="vue" />
                <span className="checkmark"></span>
              </div>
              <label htmlFor="vue">Vue.js</label>
            </div>
            <div className="radio-item">
              <div className="custom-radio">
                <input type="radio" name="framework" id="angular" />
                <span className="checkmark"></span>
              </div>
              <label htmlFor="angular">Angular</label>
            </div>
          </div>
          <h5>Custom Checkboxes</h5>
          <label>Skills:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <div className="custom-checkbox">
                <input type="checkbox" name="skills" id="html-skill" />
                <span className="checkmark"></span>
              </div>
              <label htmlFor="html-skill">HTML/CSS</label>
            </div>
            <div className="checkbox-item">
              <div className="custom-checkbox">
                <input type="checkbox" name="skills" id="js-skill" />
                <span className="checkmark"></span>
              </div>
              <label htmlFor="js-skill">JavaScript</label>
            </div>
            <div className="checkbox-item">
              <div className="custom-checkbox">
                <input type="checkbox" name="skills" id="react-skill" />
                <span className="checkmark"></span>
              </div>
              <label htmlFor="react-skill">React</label>
            </div>
          </div>
          <h4>Other HTML field types</h4>
          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input
            type="email"
            placeholder="nishit@northeastern.edu"
            id="wd-text-fields-email"
          />
          <br />
          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input
            type="number"
            defaultValue="100000"
            placeholder="1000"
            id="wd-text-fields-salary-start"
          />
          <br />
          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input
            type="range"
            defaultValue="4"
            max="5"
            placeholder="Doe"
            id="wd-text-fields-rating"
          />
          <br />
          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input
            type="date"
            defaultValue="2003-09-03"
            id="wd-text-fields-dob"
          />
          <br />
        </form>
      </div>
      <div className="lab1-section">
        <h4>Anchor tag</h4>
        <p>
          Please
          <a href="https://www.lipsum.com" id="wd-lipsum">
            click here
          </a>
          to get dummy text
        </p>
        <p>
          <a
            href="https://github.com/nishit3/webdev-assignment-1-nishit3"
            id="wd-github"
          >
            My GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
}
