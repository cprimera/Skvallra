flistItemTemplate = '\
	<div class="friend" id="{{id}}">\
		<div class="userimage" id="{{id}}">\
		</div>\
		<div class="userimagename">\
			<a>{{first_name}}</a>\
		</div>\
	</div>';

alistItemTemplate = '\
	<div class="action" id="{{action_id}}">\
		<div class="userimage" id="{{action_id}}">\
		</div>\
		<div class="userimagename">\
			<a>{{title}}</a>\
		</div>\
	</div>';

activitiesList = '\
	{{#each []}}\
	<div class="tag">\
		{{this.tag_id}}\
	</div>\
	{{/each}}\
	<div class="pagebar">\
		<ul class="pager">\
			<li class="previous"><a href="#">&laquo;</a></li>\
			<li class="next"><a href="#">&raquo;</a></li>\
		</ul>\
	</div>';

interestsList = '\
	{{#each interests}}\
	<div class="tag">\
		{{this.tag_id}}\
	</div>\
	{{/each}}\
	<div class="pagebar">\
		<ul class="pager">\
			<li class="previous"><a href="#">&laquo;</a></li>\
			<li class="next"><a href="#">&raquo;</a></li>\
		</ul>\
	</div>';

friendList = '\
	<div class="list">\
	{{#each []}}\
		{{> flistItem}}\
	{{/each}}\
	</div>\
	<div class="pagebar">\
		<ul class="pager">\
			<li class="previous"><a href="#">&laquo;</a></li>\
			<li class="next"><a href="#">&raquo;</a></li>\
		</ul>\
	</div>';

actionList = '\
	<div class="list">\
	{{#each []}}\
		{{> alistItem}}\
	{{/each}}\
	</div>\
	<div class="pagebar">\
		<ul class="pager">\
			<li class="previous"><a href="#">&laquo;</a></li>\
			<li class="next"><a href="#">&raquo;</a></li>\
		</ul>\
	</div>';

loginTemplate = '\
	<div class="login">\
		<script>\
			$(document).ready(function () {\
				$(".container").css("-webkit-filter", "blur(2px)");\
				$("#submit").click($.app.authenticate);\
				$("#logout").remove();\
			});\
		</script>\
		<form onSubmit="return false">\
			<div>\
				<input id="username" class="form-control" placeholder="Username" type="text" autofocus />\
			</div>\
			<div>\
				<input id="password" class="form-control" placeholder="Password" autocomplete="off" type="password" />\
			</div>\
			<div>\
				<button type="submit" id="submit" class="btn btn-default">Login</button>\
			</div>\
		</form>\
	</div>';

imageTemplate = '<img src="{{this.image_hash}}" />';

userSearchTemplate = '\
	{{#each []}}\
		<div class="user" id="{{id}}">\
			<div class="left usersearchimage" id="{{id}}">\
			</div>\
			<div class="usersearchname" >\
				{{this.first_name}} {{this.last_name}}\
			</div>\
			<div class="usersearchaddress" >\
				{{this.address}}\
			</div>\
		</div>\
	{{/each}}';

actionSearchTemplate = '\
	{{#each []}}\
		<div class="action" id="{{action_id}}">\
			<div class="left actionsearchimage" id="{{action_id}}">\
			</div>\
			<div class="actionsearchname" >\
				{{this.title}}\
			</div>\
			<div class="actionsearchaddress" >\
				{{this.address}}\
			</div>\
		</div>\
	{{/each}}';

searchTemplate = '\
	<div class="container">\
		<div class="row">\
			<div class="col-md-2">\
			</div>\
			<div class="col-md-8">\
				<div class="row">\
				<p>Users</p>\
				<div id="users">\
				</div>\
				</div>\
				<div class="row">\
				<p>Actions</p>\
				<div id="actions">\
				</div>\
				</div>\
			</div>\
		</div>\
	</div>';

profileTemplate = '\
	<div class="container">\
		<div class="row">\
			<div class="col-md-3">\
				<div class="profileimage">\
				</div>\
			</div>\
			<div class="information col-md-7">\
				<div class="name">\
					{{this.first_name}} {{this.last_name}}\
				</div>\
				<div class="birthday">\
					{{this.birthday}}\
				</div>\
				<div class="address">\
					{{this.address}}\
				</div>\
			</div>\
		</div>\
		<div class="row">\
			<div class="col-md-3">\
				<div class="activities">\
					{{> activitiesList}}\
				</div>\
				<div class="interests">\
					{{> interestsList}}\
				</div>\
			</div>\
			<div class="col-md-7">\
				<div class="friends">\
				</div>\
				<div class="actions">\
				</div>\
			</div>\
		</div>\
	</div>\
	{{#unless OAuthToken}}\
		{{> login}}\
	{{/unless}}';

actionTemplate = '\
	<div class="container">\
		<div class="row actionimage"></div>\
		<div class="col-md-10 title">{{this.title}}</div>\
		<div class="col-md-1 rating"></div>\
		<div class="col-md-1 status">{{#unless this.public}}lock_icon_here {{/unless}}</div>\
		<br>\
		<div class="row">\
			<div class="col-md-4">\
				<div class="start_date">Start date {{this.start_date}}</div>\
				<div class="end_date">End date {{this.end_date}}</div>\
				<br>\
				<div class="address">{{this.address}}</div>\
				<div class="tags">\
					{{> activitiesList}}\
				</div>\
				<div class="users">\
					{{> friendsList}}\
				</div>\
			</div>\
			<div class="col-md-8 action_description">{{this.description}}</div>\
		</div>\
	</div>\
';

settingsTemplate = '\
	<div class="container">\
		<div class="list">\
		{{#each []}}\
			<div class="setting">\
				<div class="setting_name">{{this.setting_id}}</div>\
				<div class="description">{{this.description}}</div>\
				<div class="setting_value">{{this.value}}</div>\
			</div>\
		{{/each}}\
		</div>\
	</div>\
';

searchListItemTemplate = '\
	<div>\
		<div>\
			<img src="{{this.image}}" />\
		</div>\
		<div>\
			{{this.name}}\
		</div>\
	<div>';

$.app = {};

$.app.OAuthToken = $.cookie('OAuthToken');

// check OAuthToken Validity

$.ajaxSetup({
	beforeSend: function (xhr, settings)
	{
		if (settings.url.indexOf("/", settings.url.length - 1) == -1) {
			settings.url += "/";
		}
		if ($.app.OAuthToken) {
			xhr.setRequestHeader("Authorization","Bearer " + $.app.OAuthToken);
		}
	}
});

SearchUser = Backbone.Collection.extend({
	initialize: function(models, options) {
    	this.id = options.id;    
  	},
	url: function() {
		return "/api/search/" + this.id + "/users/";
	},
});

SearchAction = Backbone.Collection.extend({
	initialize: function(models, options) {
    	this.id = options.id;    
  	},
	url: function() {
		return "/api/search/" + this.id + "/actions/";
	},
});

User = Backbone.Model.extend({
	urlRoot: '/api/users/',
});

Users = Backbone.Collection.extend({
	model: User,
	url: "/api/users/",
});

Activity = Backbone.Model.extend({
	urlRoot: "/api/tags/",
});

Activities = Backbone.Collection.extend({
	model: Activity,
	url: "/api/tags/",
});

Images = Backbone.Model.extend({
	urlRoot: '/api/images/'
});

Profile = Backbone.Model.extend({
	initialize: function() {
		this.on('sync', this.record, this);
	},
	urlRoot: '/api/me/',
	record: function() {
		$.app.user = this;
	}
});

ProfileList = Backbone.Collection.extend({
	model: Profile,
	url: "/api/me/",
});

Action = Backbone.Model.extend({
	urlRoot: '/api/actions/',
});

ActionUsers = Backbone.Collection.extend({
	model: User,
	initialize: function(models, options) {
    	this.id = options.id;    
  	},
  	url: function() {
    	return '/api/action_users/' + this.id;
  	},
});


UserActions = Backbone.Collection.extend({
	model: Action,
	url: '/api/user_actions/',
});

Setting = Backbone.Model.extend({
	urlRoot: '/api/settings/',
});

Settings = Backbone.Collection.extend({
	model: Setting,
	url: "/api/settings/",
});


ListItemView = Backbone.View.extend({
	render: function() {
		var source = listItemTemplate;
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());

		this.$el.html(html);
	}
});

TagsListView = Backbone.View.extend({
	render: function() {
		var source = tagsList;
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());

		this.$el.html(html);	
	}
});

ActivitiesView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.render, this);
		this.collection.on('change', this.render, this);
		this.collection.on('sync', this.render, this);
	},
	render: function() {
		var source = activitiesList;
		var template = Handlebars.compile(source);
		var html = template(this.collection.toJSON());
		this.$el.html(html);
	}
});

ActionListView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.render, this);
		this.collection.on('change', this.render, this);
		this.collection.on('sync', this.render, this);
	},
	events: {
		"click .action" : "navi",
	},
	render: function() {
		var source = actionList;
		var template = Handlebars.compile(source);
		var html = template(this.collection.toJSON());

		this.$el.html(html);

		this.render_image();
	},
	render_image: function() {
		$(this.collection.models).each(function() {
			var image = new Images({id: this.attributes.image});
			var imageView = new ImageView({model: image});
			imageView.$el = $('#' + this.attributes.action_id + '.userimage');
			image.fetch();
		});
	},
	navi: function(event) {
		router.navigate("/action/" + event.currentTarget.id, {trigger: true});
	}
});

ActionFriendListView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.render, this);
		this.collection.on('change', this.render, this);
		this.collection.on('sync', this.render, this);

	},
	events: {
		"click .friend": "navi",
	},
	render: function() {
		var source = friendList;
		var template = Handlebars.compile(source);
		var html = template(this.collection.toJSON());

		this.$el.html(html);

		this.render_image();
	},
	render_image: function() {
		$(this.collection.models).each(function() {
			var image = new Images({id: this.attributes.image});
			var imageView = new ImageView({model: image});
			imageView.$el = $('#' + this.attributes.id + '.userimage');
			image.fetch();
		});
	},
	navi: function(event) {
		if (event.currentTarget.id == $.app.user.attributes.id) {
			router.navigate("/", {trigger: true});
		} else {
			router.navigate("/" + event.currentTarget.id, {trigger: true});
		}
	}
});

LoginView = Backbone.View.extend({
	render: function() {
		var source = loginTemplate;
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());

		this.$el.html(html);
	}
});

ImageView = Backbone.View.extend({
	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('sync', this.render, this);
	},
	render: function() {
		var source = imageTemplate;
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());

		this.$el.html(html);
	}
});

SearchUserView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.render, this);
		this.collection.on('change', this.render, this);
		this.collection.on('sync', this.render, this);
	},
	events: {
		"click .user": "navi",
	},
	render: function() {
		var source = userSearchTemplate;
		var template = Handlebars.compile(source);
		var html = template(this.collection.toJSON());

		this.$el.html(html);

		this.render_image();
	},
	render_image: function() {
		$(this.collection.models).each(function() {
			var image = new Images({id: this.attributes.image});
			var imageView = new ImageView({model: image});
			imageView.$el = $('#' + this.attributes.id + '.usersearchimage');
			image.fetch();
		});
	},
	navi: function(event) {
		if (event.currentTarget.id == $.app.user.attributes.id) {
			router.navigate("/", {trigger: true});
		} else {
			router.navigate("/" + event.currentTarget.id, {trigger: true});
		}
	},
});

SearchActionView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.render, this);
		this.collection.on('change', this.render, this);
		this.collection.on('sync', this.render, this);
	},
	events: {
		"click .action": "navi",
	},
	render: function() {
		var source = actionSearchTemplate;
		var template = Handlebars.compile(source);
		var html = template(this.collection.toJSON());

		this.$el.html(html);

		this.render_image();
	},
	render_image: function() {
		$(this.collection.models).each(function() {
			var image = new Images({id: this.attributes.image});
			var imageView = new ImageView({model: image});
			imageView.$el = $('#' + this.attributes.action_id + '.actionsearchimage');
			image.fetch();
		});
	},
	navi: function(event) {
		router.navigate("/action/" + event.currentTarget.id, {trigger: true});
	}
});

SearchView = Backbone.View.extend({
	initialize: function(options) {
		this.searchterm = options.searchterm;
		// this.searchterm.on('add', this.render, this);
		// this.searchterm.on('change', this.render, this);
		// this.searchterm.on('sync', this.render, this);
	},
	render: function() {
		var source = searchTemplate;
		var template = Handlebars.compile(source);
		var html = template({});

		this.$el.html(html);

		var userSearch = new SearchUser([], {id: this.searchterm});
		var searchUserView = new SearchUserView({collection: userSearch});
		searchUserView.$el = $('#users');
		userSearch.fetch();
		searchUserView.delegateEvents();

		var actionSearch = new SearchAction([], {id: this.searchterm});
		var searchActionView = new SearchActionView({collection: actionSearch});
		searchActionView.$el = $('#actions');
		actionSearch.fetch();
		searchActionView.delegateEvents();
	},
	render_image: function() {
		$(this.collection.models).each(function() {
			var image = new Images({id: this.attributes.image});
			var imageView = new ImageView({model: image});
			imageView.$el = $('#' + this.attributes.id + '.usersearchimage');
			image.fetch();
		});
	}
});

ProfileView = Backbone.View.extend({
	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('sync', this.render, this);
		this.model.on('error', this.error, this);
	},
	error: function() {
		this.model = new User({});
		this.render();
	},
	render: function() {
		var source = profileTemplate;
		var template = Handlebars.compile(source);

		var data = this.model.attributes;
		
		if (data.birthday) {
			var d = new Date(data.birthday);
			data.birthday = d.toLocaleDateString();
		}
		
		var temp = this.model.toJSON()
		temp.OAuthToken = $.app.OAuthToken;
		
		var html = template(temp);

		this.$el.html(html);

		this.render_image();
		this.render_friends();
		this.render_actions();
		this.render_activities();
		this.render_interests();
	},
	render_image: function() {
		var image = new Images({id: this.model.attributes.image});
		var imageView = new ImageView({model: image});
		imageView.$el = $('.profileimage');
		image.fetch();
	},
	render_friends: function() {
		var friends = this.model.attributes.friends;
		var users = new Users();
		var actionFriendListView = new ActionFriendListView({collection: users});
		actionFriendListView.$el = $('.friends');
		$(friends).each(function() {
			var user = new User({id: this.valueOf()});
			users.add(user);
			user.fetch();
		});
		actionFriendListView.delegateEvents();
	},
	render_actions: function() {
		var actions = new UserActions();
		var actionListView = new ActionListView({collection: actions});
		actionListView.$el = $('.actions');
		actions.fetch();
		actionListView.delegateEvents();
	},
	render_activities: function() {
		var activities = this.model.attributes.activities;
		var acts = new Activities();
		var activitiesView = new ActivitiesView({collection: acts});
		activitiesView.$el = $('.activities');
		$(activities).each(function() {
			var act = new Activity({id: this.valueOf()});
			acts.add(act);
			act.fetch();
		});
	},
	render_interests: function() {
		var activities = this.model.attributes.interests;
		var acts = new Activities();
		var activitiesView = new ActivitiesView({collection: acts});
		activitiesView.$el = $('.interests');
		$(activities).each(function() {
			var act = new Activity({id: this.valueOf()});
			acts.add(act);
			act.fetch();
		});
	}
});

ActionView = Backbone.View.extend({
	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('sync', this.render, this);
	},
	render: function() {
			var source = actionTemplate;
			var template = Handlebars.compile(source);

			var data = this.model.attributes;
			
			// var d = new Date(data.birthday);
			// data.birthday = d.toLocaleDateString();
			
			var html = template(this.model.toJSON());
			this.$el.html(html);

			this.render_image();
			this.render_tags();
			this.render_participants();

		},
	render_image: function() {
		var image = new Images({id: this.model.attributes.image});
		var imageView = new ImageView({model: image});
		imageView.$el = $('.actionimage');
		image.fetch();
	},
	render_tags: function() {
		var activities = this.model.attributes.tags;
		var acts = new Activities();
		var activitiesView = new ActivitiesView({collection: acts});
		activitiesView.$el = $('.tags');
		$(activities).each(function() {
			var act = new Activity({id: this.valueOf()});
			acts.add(act);
			act.fetch();
		});
	},
	render_participants: function(){
		var participants = new ActionUsers([], {id: this.model.attributes.id});
		participants.fetch({success: function(){
			var users = new Users();
			var actionFriendListView = new ActionFriendListView({collection: users});
			actionFriendListView.$el = $('.users');
			participants.each(function(m) {
				var user = new User({id: m.get("id")});
				users.add(user);
				user.fetch();
			});
			actionFriendListView.delegateEvents();
		}});
	},

});

SettingsView = Backbone.View.extend({
	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('sync', this.render, this);
	},
	render: function() {
		var source = settingsTemplate;
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());
		this.$el.html(html);
	},
});


Router = Backbone.Router.extend({
	initialize: function (options){
		$.app.validate();
	},
	routes: {
		"": "show_profile",
		"suggested": "show_suggested",
		"nearby": "show_nearby",
		"settings": "show_settings",
		"logout": "logout",
		"action/:id": "show_action",
		"search/:term": "show_search",
		"activities/:term": "show_activities",
		"interests/:term": "show_interests",
		":id": "show_profile",
		"action/:id": "show_action",
	},
	show_profile: function(id) {
		$.app.profile;
		if (id) {
			$.app.profile = new User({id: id});
		} else {
			$.app.profile = new Profile();
		}

		$.app.profileView = new ProfileView({model: $.app.profile});
		$.app.profileView.$el = $("#content");
		$.app.profile.fetch();
	},
	show_suggested: function() {

	},
	show_nearby: function() {

	},
	show_settings: function() {
		var settings = new Settings();
		var settingsView = new SettingsView({model: settings});
		settingsView.$el = $("#content");
		settings.fetch();
		console.log(settings);
	},
	show_action: function(id) {
		var action = new Action({id: id});
		var actionView = new ActionView({model: action});
		actionView.$el = $("#content");
		action.fetch();
	},
	show_search: function(term) {
		// var search = new SearchUser([], {id: term});
		var searchView = new SearchView({searchterm: term});
		searchView.$el = $("#content");
		searchView.render();
		// search.fetch();
	},
	show_activities: function(term) {

	},
	show_interests: function(term) {

	},
	logout: function() {
		delete $.app.OAuthToken;
		$.removeCookie("OAuthToken");
		router.navigate("/", {trigger: true});
	}
});

$.app.authenticate = function() {
	var username = $('#username').val();
	var password = $('#password').val();
	$.ajax({
		type: "POST",
		url: "/oauth2/access_token",
		data: {
			client_id: "b54456c016e657c9c580",
			client_secret: "56e69e9d5e6962f532db25f2b5fe1dbc6966f5ab",
			grant_type: "password",
			username: username,
			password: password,
		}
	}).done(function (data) {
		$.app.OAuthToken = data.access_token;
		$.cookie("OAuthToken", $.app.OAuthToken);
		$(".login").remove();
		$(".container").css("-webkit-filter", "");
		$("#logo").after('<ul class="nav navbar-nav navbar-right"><li><a class="navbar-link" href="/logout">Logout</a></li></ul>');
		router.show_profile();
	});
}

$.app.validate = function() {
	$.ajax({
		type: "GET",
		url: "/api/me/",
		statusCode: {
			401: function() {
				delete $.app.OAuthToken;
				$.removeCookie("OAuthToken");
			}
		}
	});
}

$.app.search = function() {
	var searchterm = $('#searchbox').val();
	console.log(searchterm);
	router.navigate("/search/" + searchterm, {trigger: true});
	return false;
}

$(document).ready(function () {

	Handlebars.registerPartial("flistItem", flistItemTemplate);
	Handlebars.registerPartial("alistItem", alistItemTemplate);
	Handlebars.registerPartial("activitiesList", activitiesList);
	Handlebars.registerPartial("interestsList", interestsList);
	Handlebars.registerPartial("friendsList", friendList);
	Handlebars.registerPartial("actionsList", actionList);
	Handlebars.registerPartial("login", loginTemplate);

	$("#navbar-form").submit($.app.search);

	router = new Router();
	Backbone.history.start({pushState: true});

});
