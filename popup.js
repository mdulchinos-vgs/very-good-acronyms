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
  "UAU": "Unified Account Updater: A sub service of account updater that we use to run Visa au at 100x speed",
  "OAI": "Open AI",
  "AOV": "Average Order Volume",
  "PMR": "Payment Message Router",
  "GDPR": "General Data Protection Regulation (a strict European Union law on data privacy and security)",
  "CAAR": "Contract Average Anualized Revenue",
  "GA": "General Availbility",
  "PAR": "Production Access Request",
  "DRI": "Designated Resposible Individual",
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
  "Frontbook": "organic traffic",
  "Backbook": "migration traffic",
  "BIN": "Bank Identification Number, first 6–8 digits of a PAN identifying the issuing bank",
  "IIN": "Issuer Identification Number, first 6–8 digits of a PAN identifying the issuing bank",
  "CALM": "Card Management V1 APIs (older CMP APIs being phased out)",
  "DPAN": "Device Primary Account Number (tokenized PAN used on a device), sometimes also gets used to describe a network token in some markets (I.E. South America)",
  "MPAN": "Merchant Primary Account Number (merchant-specific token)",
  "FPE": "Format-Preserving Encryption",
  "3DS": "3-D Secure (card authentication protocol)",
  "CSL3": "Customer Support Layer 3 escalation; type of ticket that we use to escalate issues to engineering",
  "WAF": "Web Application Firewall",
  "C": "Customer",
  "CAVV": "3DS Cryptogram",
  "DCD": "Duplicate Card Detection",
  "TAVV": "Token Authentication Verification Value",
  "DTVV": "Dynamic Token Verification Value",
  "TRID": "Unique Token ID that uniquely represents entity requesting and managing payment tokens",
  "FPAN": "Funding Primary Account Number (this is what we think of as 'PAN')",
  "EMV": "Europay, Mastercard, Visa. See also EMVCo",
  "EMVCo": "EMVCo is the payments body that manages network tokens, 3DS, contact and contactless chip payments (NFC), QR payments, and other methods.",
  "CNP": "Card Not Present. A transaction where the card isnt present, e.g: e-commerce or merchant initiated transaction. The inverse might be CP for Card Present, though usually not referred to outside the CNP context.",
  "CP": "Card Present. A transaction where the card is present. The inverse of CNP.",
  "NFC": "Near-Field Communication",
  "KOPF": "Kubernetes Operator Pythonic Framework",
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