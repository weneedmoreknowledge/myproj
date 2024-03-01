class UserPreference:
    def __init__(self, user_id, preferences):
        self.user_id = user_id
        self.preferences = preferences

    def get_user_id(self):
        return self.user_id

    def get_preferences(self):
        return self.preferences

class RecommendationAlgorithm:
    def __init__(self, users):
        self.users = users

    def recommend(self, user_id):
        user_preferences = next((x for x in self.users if x.get_user_id() == user_id), None)
        if user_preferences:
            return user_preferences.get_preferences()
        else:
            return []
