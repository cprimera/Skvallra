from models import *
from utils import BaseSerializer


class UserSerializer(BaseSerializer):
	rating = 'get_rating'
	fields = ['id', 'username', 'email', 'first_name', 'last_name', 'birthday', 'gender', 'activities', 'interests', 'friends', 'rating', 'address', 'coordinates', 'image', 'thumbnail', 'is_staff', 'is_active', 'date_joined']
	model = User

class TagSerializer(BaseSerializer):
	fields = ['id']
	model = Tag

class ActionSerializer(BaseSerializer):
	fields = ['id', 'title', 'description', 'start_date', 'end_date', 'public', 'min_participants', 'max_participants', 'address', 'coordinates', 'image', 'thumbnail', 'tags']
	model = Action

class ImageSerializer(BaseSerializer):
	fields = ['id', 'hash']
	model = Image

class UserActionSerializer(BaseSerializer):
	fields = ['id', 'user_id', 'action_id', 'role', 'rating']
	model = UserAction

class UserInfoSerializer(BaseSerializer):
	image = ImageSerializer()

	fields = ['first_name', 'last_name', 'image']
	model = User

class CommentInputSerializer(BaseSerializer):
	fields = ['id', 'action_id', 'user_id', 'comment_time', 'comment']
	model = Comment

class CommentSerializer(BaseSerializer):
	user_id = UserInfoSerializer()

	fields = ['id', 'action_id', 'user_id', 'comment_time', 'comment']
	model = Comment

class PageViewSerializer(BaseSerializer):
	fields = ['id', 'page', 'date']
	model = PageView

class SettingSerializer(BaseSerializer):
	fields = ['id', 'min_participants', 'max_participants']
	model = Setting
