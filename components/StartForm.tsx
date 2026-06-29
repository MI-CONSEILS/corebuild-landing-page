"use client";

import { useState, useRef } from "react";

export function StartForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [website, setWebsite] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    const file = fileRef.current?.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent("New project enquiry — CoreBuild");
    const body = encodeURIComponent(
      [
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company || "—"}`,
        `Location: ${location}`,
        `Industry Sector: ${sector}`,
        `Website: ${website || "—"}`,
        `Budget: ${budget}`,
        fileName ? `Attachment ready: ${fileName}` : "",
        ``,
        `Project Description:`,
        description
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:welcome@corebuild-int.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="start-form" onSubmit={handleSubmit} noValidate>
      <div className="start-form__grid">
        <label className="start-form__field">
          <span className="start-form__label">
            Full Name<span className="start-form__required">*</span>
          </span>
          <input
            type="text"
            name="fullName"
            required
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label className="start-form__field">
          <span className="start-form__label">
            Email<span className="start-form__required">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="start-form__field">
          <span className="start-form__label">
            Phone Number<span className="start-form__required">*</span>
          </span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+1 234 567 890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label className="start-form__field">
          <span className="start-form__label">Company</span>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label className="start-form__field">
          <span className="start-form__label">
            Location<span className="start-form__required">*</span>
          </span>
          <input
            type="text"
            name="location"
            required
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label className="start-form__field">
          <span className="start-form__label">
            Industry Sector<span className="start-form__required">*</span>
          </span>
          <select
            name="sector"
            required
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <option value="" disabled>
              Select your sector
            </option>
            <option value="Construction">Construction</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Retail">Retail</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Industrial">Industrial</option>
            <option value="Architecture & Design">
              Architecture & Design
            </option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="start-form__field">
          <span className="start-form__label">
            Budget Range<span className="start-form__required">*</span>
          </span>
          <select
            name="budget"
            required
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="< $10k">Below $10,000</option>
            <option value="$10k – $50k">$10,000 – $50,000</option>
            <option value="$50k – $100k">$50,000 – $100,000</option>
            <option value="$100k – $500k">$100,000 – $500,000</option>
            <option value="> $500k">Above $500,000</option>
            <option value="Not defined yet">Not defined yet</option>
          </select>
        </label>

        <label className="start-form__field">
          <span className="start-form__label">Website URL</span>
          <input
            type="url"
            name="website"
            placeholder="https://your-company.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>

        <label className="start-form__field">
          <span className="start-form__label">Specifications / Blueprint (PDF)</span>
          <div className="start-form__file-wrapper">
            <input
              ref={fileRef}
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx,.dwg,.dxf"
              className="start-form__file-input"
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="start-form__file-label"
              onClick={() => fileRef.current?.click()}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.25V12.75M3.25 8H12.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Choose file
            </button>
            {fileName ? (
              <span className="start-form__file-name">{fileName}</span>
            ) : null}
          </div>
        </label>
      </div>

      <label className="start-form__field start-form__field--full">
        <span className="start-form__label">
          Project Description<span className="start-form__required">*</span>
        </span>
        <textarea
          name="description"
          rows={5}
          required
          placeholder="Tell us about your project — what are you building, what materials do you need, and what is your timeline?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit" className="start-form__submit">
        Submit enquiry
      </button>
    </form>
  );
}
