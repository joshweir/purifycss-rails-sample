module.exports = function(grunt) {
    var projectHome = '/home/resrev/pubrevit/';
    var jsDir = projectHome + 'app/assets/javascripts/';
    var cssDir = projectHome + 'app/assets/stylesheets/';
    var jsFiles = ['scholur_init.js.erb', 
				   'bootstrap.js', 
				   'ckeditor_defaults.js.erb',
				   'summernote.js',
				   'dependencies.js',
				   'bootstrap-slider.js',
				   'resize_scholur.js',
				   'wrapkit.js',
				   'wrapkit-setup.js',
				   'plugin-setups.js',
				   'morris.bundle.js',
				   'jquery.sparkline.js',
				   'jquery.tagsinput.js',
				   'ladda-buttons/js/spin.min.js',
				   'ladda-buttons/js/ladda.min.js',
				   'utility/cookies.js',
				   'utility/Url.js',
				   'utility/mathjs_transpose.min.js',
				   'utility/scholur_math.js',
				   'utility/text_miner',
				   'tour/scholx_autosearch_tour.js',
				   'tour/scholx_visualsearch_tour.js',
				   'tour/scholx_searchcontrols_tour.js',
				   'tour/scholx_usercuration_tour.js',
				   'tour/scholx_tours.js',
				   'work_user_specifics.js.erb',
				   'custom.js',
				   'work_common.js',
				   'scholur_popover.js',
				   'work_charts/work_charts_defaults.js',
				   'work_charts/network/pubdata_to_network.js',
				   'work_charts/subjects/pubdata_to_subjects.js',
				   'work_charts/work_charts_popover.js',
				   'work_charts/work_charts_common.js',
				   'work_charts/data_cleanser.js',
				   'work_charts/scatter/work_charts_scatter.js',
				   'work_charts/subjects/work_charts_subjects.js',
				   'work_charts/wordcloud/wordcloud_utility.js',
				   'work_charts/wordcloud/work_charts_wordcloud.js',
				   'work_charts/network/work_charts_network.js',
				   'work_charts/work_charts.js',
				   'works.js.erb',
				   'comments.js.erb',
				   'home.js.erb',
				   'ckeditor.js.erb',
				   'users.js.erb',
				   'user_doc.js.erb'];
	var cssFiles = ['custom.css', 
					'demo.css',
					'bootstrap.css',
					'dependencies.css',
					'components.css',
					'wrapkit.css',
					'unify-globals.css',
					'bootstrap-slider.css',
					'loaders.min.css',
					'jquery.mCustomScrollbar.min.css',
					'ion.rangeSlider.skinHTML5_d3scatter.css'];			   
    var src = [projectHome + 'app/views/**/*.html.erb'];
	var purifycss = {
			options: {}
		};
	var purifycssMultiTasks = [];
	for (var i=0; i<jsFiles.length; i++)
		src.push(jsDir + jsFiles[i]);
	for (i=0; i<cssFiles.length; i++) {
		purifycss['target'+(i+1)] = {
				src: src,
				css: [cssDir + cssFiles[i]],
				dest: 'out/' + cssFiles[i]
			};
		purifycssMultiTasks.push('purifycss:target'+(i+1));	
	}
		
    grunt.initConfig({
        purifycss: purifycss
    });
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.registerTask('purifycssmulti', purifycssMultiTasks);
}
