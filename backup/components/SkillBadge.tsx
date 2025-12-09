interface SkillBadgeProps {
  skill: string;
  variant?: 'primary' | 'secondary' | 'success';
}

export default function SkillBadge({ skill, variant = 'primary' }: SkillBadgeProps) {
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800 border-blue-200',
    secondary: 'bg-gray-100 text-gray-800 border-gray-200',
    success: 'bg-green-100 text-green-800 border-green-200',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantClasses[variant]} transition-all hover:scale-105`}
    >
      {skill}
    </span>
  );
}
