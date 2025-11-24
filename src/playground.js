class InstagramV2 {
  constructor(username) {
    this.username = username;
    this.followers = [];
  }

  getFollowers() {
    return { followers: [...this.followers] };
  }
}

class InstagramV3 extends InstagramV2 {
  getFollowers() {
    return { followers: [...this.followers], suggestions: this.getSuggestions() };
  }

  getSuggestions() {
    // some cloud function
  }
}
