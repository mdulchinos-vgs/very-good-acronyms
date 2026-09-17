// A simple dictionary of acronyms
const acronymDictionary = {
  "VGS": "Very Good Security",
  "BEE": "Batch Enrollment Engine",
  "MFT": "Managed File Tokenization/Transfer",
  "TNT": "Tenant (id)",
  "SIE": "Systems Integration Engineering",
  "SA": "Solutions Architect",
  "PII": "Personally Identifiable Information",
  "AU": "Account Updater, a feature which allows for the updating of cards with things like updated expiry date.",
  "VAS": "Value Added Services",
  "NT": "Network Token",
  "TPS": "Transactions Per Second",
  "RPS": "Requests Per Second",
  "RPM": "Requests Per Minute",
  "CRD": "Customer Reported Defect",
  "IRD": "Internally Reported Defect",
  "PayOpt": "Payment Optimization",
  "ISO": "Isolated Stack",
  "ACP": "Asychronus Card Processor",
  "PAN": "Primary Account Number",
  "PCI": "Payment Card Industry",
  "CMP": "Card Management Platform",
  "PSP": "Payment Service Provider",
  "SFTP": "Secure File Transfer Protocol",
  "ANI": "Account Name Inquiry",
  "DSS": "Data Security Standard",
  "PAV": "Payment Account Validation",
  "SOC2": "Service Organization Control 2",
  "3DS": "3-D Secure, the card authentication protocol VGS offers execution-only support for",
  "Larky": "A safe, non-Turing complete subset of Python 3 built on Google's Starlark built by VGS for data security/tokenization"
};

document.getElementById("searchBtn").addEventListener("click", () => {
  // Grab the user's input, trim spaces, and convert to uppercase to match the dictionary keys
  const query = document.getElementById("searchInput").value.trim().toUpperCase();
  const resultDiv = document.getElementById("result");

  if (!query) {
    resultDiv.textContent = "Please enter an acronym/term.";
    resultDiv.style.color = "black";
    return;
  }

  // Check if the acronym exists in our dictionary
  if (acronymDictionary[query]) {
      resultDiv.textContent = `${query}: ${acronymDictionary[query]}`;
      resultDiv.style.color = "green";
    } else {
      // Add a dynamically generated Google search link
      resultDiv.innerHTML = `
        Acronym not found.<br><br>
        <a href="https://www.google.com/search?q=${query}+meaning" target="_blank">Search the Web for "${query}"</a><br><br>
        <a href="https://github.com/mdulchinos-vgs/very-good-acronyms" target="_blank">Add it on GitHub</a><br>
        or <a href="mailto:your.email@example.com?subject=Acronym Addition Request: ${query}">Email Me</a>
      `;
      resultDiv.style.color = "red";
    }
});

document.getElementById("searchInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents default behavior
    document.getElementById("searchBtn").click(); // Triggers the search
  }
});