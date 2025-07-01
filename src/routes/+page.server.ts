import type { PageServerLoad } from './$types';

interface Repo {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
}


const featuredRepos = [
    "Sistema_Agendamente_Financeiro", 
    "IndustriaPOOIndustriaPOO", 
    "e-commerce-api-integrated",
    "LastFM_Collage" 
];

export const load: PageServerLoad = async ({ fetch }) => {
    const response = await fetch('https://api.github.com/users/Zerfallener-Succellus/repos?sort=created');
    
    if (!response.ok) {
        
        return { projects: [] };
    }

    const allRepos: Repo[] = await response.json();

    
    const projects = allRepos
        .filter(repo => featuredRepos.includes(repo.name))
        .map(repo => ({ 
            name: repo.name.replaceAll('-', ' ').replaceAll('_', ' '),
            url: repo.html_url,
            description: repo.description,
            stars: repo.stargazers_count,
            language: repo.language
        }));

    return {
        projects
    };
};