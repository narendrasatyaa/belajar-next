import { Link } from 'react-router-dom';
import SkillBadge from './SkillBadge';

interface TalentCardProps {
  talent: {
    id: number;
    name: string;
    photo: string;
    program: string;
    skills: string[];
  };
}

export default function TalentCard({ talent }: TalentCardProps) {
  // Display max 3 skills
  const displaySkills = talent.skills.slice(0, 3);
  const remainingSkills = talent.skills.length - 3;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Photo */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={talent.photo || '/placeholder-avatar.png'}
          alt={talent.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
          {talent.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{talent.program}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
          {displaySkills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} variant="primary" />
          ))}
          {remainingSkills > 0 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
              +{remainingSkills} more
            </span>
          )}
        </div>

        {/* View Detail Button */}
        <Link
          to={`/talents/${talent.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
