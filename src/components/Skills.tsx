import Chart from "react-apexcharts";

export default function Skills() {
    const hardSkills = {
        options: {
          chart: {
            id: 'skills-chart'
          },
          labels: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Rust', 'C/C++', 'Next.js', 'Python', 'Kubernetes', 'Docker', 'CI/CD', 'Git', 'Jenkins', 'Ansible', 'React Native', 'Haskell'],
          colors: ['#F7DF1E', '#007ACC', '#61DAFB', '#8CC84B', '#DEA584', '#00599C', '#000000', '#3776AB', '#326CE5', '#0DB7ED', '#E24329', '#F05032', '#D33833', '#EE0000', '#61DAFB', '#5D4F85'],
          legend: {
              position: 'bottom' as 'bottom'
          }
        },
        series: [90, 90, 90, 90, 50, 100, 80, 100, 70, 85, 80, 90, 70, 80, 90, 90],
    };
    const softSkills = {
        options: {
          chart: {
            id: 'skills-chart'
          },
          labels: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Leadership', 'Adaptability', 'Creativity', 'Critical Thinking', 'Conflict Resolution', 'Decision Making'],
          colors: ['#F7DF1E', '#007ACC', '#61DAFB', '#8CC84B', '#DEA584', '#00599C', '#000000', '#3776AB', '#326CE5', '#0DB7ED'],
          legend: {
              position: 'bottom' as 'bottom'
          }
        },
        series: [90, 100, 90, 80, 100, 100, 60, 80, 70, 85],
    };

    return (
        <div id="skills" className="flex flex-col justify-center space-y-8 mx-auto py-32 bg-white dark:bg-black text-black dark:text-white w-screen">
            <span className="bg-white border rounded-xl w-[80%] mx-auto">
                <h1 className="text-3xl font-bold text-center text-black pt-8">
                    Mes Compétences Techniques
                </h1>
                <p className="text-center text-sm font-light p-8 text-black pb-8">
                    Voici un aperçu bref de mes compétences techniques.
                </p>
                <Chart options={hardSkills.options} series={hardSkills.series} type="pie" width="100%" height="100%" />
            </span>
            <span className="bg-white border rounded-xl w-[80%] mx-auto">
                <h1 className="text-3xl font-bold text-center text-black pt-8">
                    Mes Compétences Transversales
                </h1>
                <p className="text-center text-sm font-light p-8 text-black pb-8">
                    Voici un peu mon savoir-être.
                </p>
                <Chart options={softSkills.options} series={softSkills.series} type="pie" width="100%" height="100%" />
            </span>
        </div>
    );
}
