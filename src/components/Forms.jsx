function Forms() {
  return (
    <div className="form-container">
      <h1>HTML Forms Demo</h1>

      <form action="#" method="POST">
        {/* Text Input */}
        <div className="formDivs">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            maxLength="30"
          />
        </div>

        {/* Email */}
        <div className="formDivs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            required
          />
        </div>

        {/* Password */}
        <div className="formDivs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            required
          />
        </div>

        {/* Number */}
        <div className="formDivs">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" min="18" max="60" />
        </div>

        {/* Date */}
        <div className="formDivs">
          <label>Date of Birth</label>
          <input type="date" />
        </div>

        {/* Phone Pattern */}
        <div className="formDivs">
          <label>Phone Number</label>
          <input type="tel" pattern="[0-9]{10}" placeholder="10 digit number" />
        </div>

        {/* Radio */}
        <div className="formDivs">
          <p>Gender</p>

          <label>
            <input type="radio" name="gender" /> Male
          </label>

          <label>
            <input type="radio" name="gender" /> Female
          </label>

          <label>
            <input type="radio" name="gender" /> Other
          </label>
        </div>

        {/* Checkbox */}
        <div className="formDivs">
          <p>Skills</p>

          <label>
            <input type="checkbox" /> HTML
          </label>

          <label>
            <input type="checkbox" /> CSS
          </label>

          <label>
            <input type="checkbox" /> JavaScript
          </label>

          <label>
            <input type="checkbox" /> React
          </label>
        </div>

        {/* Select */}
        <div className="formDivs">
          <label>Country</label>

          <select>
            <option>Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Textarea */}
        <div className="formDivs formPara">
          <label>About Yourself</label>

          <textarea rows="2" placeholder="Write something..."></textarea>
        </div>

        {/* File Upload */}
        <div className="formDivs">
          <label>Upload Resume</label>

          <input type="file" />
        </div>

        {/* Color */}
        <div className="formDivs">
          <label>Favorite Color</label>

          <input type="color" />
        </div>

        {/* Range */}
        <div className="formDivs">
          <label>Experience Level</label>

          <input type="range" min="0" max="10" />
        </div>

        {/* Readonly */}
        <div className="formDivs">
          <label>Referral Code</label>

          <input type="text" value="HTMLCSS2025" readOnly />
        </div>

        {/* Disabled */}
        <div className="formDivs">
          <label>Disabled Field</label>

          <input type="text" value="Can't able to edit this" disabled />
        </div>

        {/* Buttons */}
        <div className="formDivs">
          <input type="submit" value="Submit Form" className="formBtn" />

          <input type="reset" value="Reset Form" className="formBtn" />
        </div>
      </form>
    </div>
  );
}

export default Forms;
