const assert = require("assert");
const app = require("../app.js");


const questions = {
  question: [{
    id: 1,
    question: "who are you?"
  }]
}
const advanced = {
  advanced: [{
    id: 1,
    intimacyLevel: 1,
    familyFriendly: true
  }]
}
const mergedArray = [{
  id: 1,
  question: "who are you?",
  intimacyLevel: 1,
  familyFriendly: true
}]

describe("Random question generator and advanced settings", () => {
  describe("#mergeData", () => {
    it("creates a merged array of questions and advanced settings", () => {
      assert.deepEqual(app.mergeData(questions, advanced), mergedArray)
    })
  })
})
