export const questions = [
  {
    "id": 1,
    "prompt": "What is your First Name?",
    "type": "text",
    "isRequired": true
  },
  {
    "id": 2,
    "prompt": "What is your Last Name?",
    "type": "text",
    "isRequired": true
  },
  {
    "id": 3,
    "prompt": "What is your Age?",
    "type": "number",
    "isRequired": true
  },
  {
    "id": 4,
    "prompt": "What is your nationality?",
    "type": "text",
    "isRequired": false
  },
  {
    "id": 5,
    "prompt": "Where do you study?",
    "type": "select",
    "options": ["University of Toronto", "University of Waterloo", "University of British Columbia"],
    "isRequired": true
  },
  {
    "id": 6,
    "prompt": "What all languages do you speak?",
    "type": "checkbox",
    "options": ["English", "Hindi", "French", "German"],
    "isRequired": false,

  },
  {
    "id": 7,
    "prompt": "When do you plan on returning to Canada?",
    "type": "date",
    "isRequired": true
  }
];