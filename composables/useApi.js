import main from '@/api/main.js';
import practice from '@/api/practice.js';
import sections from '@/api/sections.js';
import project from '@/api/project.js';
import auth from '@/api/auth.js';
import news from '@/api/news.js';
import video from '@/api/video.js';
import profile from '@/api/profile.js';
import programApplications from '@/api/program-applications.js';

export const useApi = () => {
	return {
		main,
		practice,
		sections,
		project,
		auth,
		profile,
		news,
		video,
		programApplications,
	};
};
