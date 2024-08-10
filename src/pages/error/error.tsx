import { CustomButton } from '@/components/ui/custom-button.tsx';
import { useNavigate } from 'react-router-dom';

export const Error = () => {
  const navigate = useNavigate();

  const error = 'Страница не найдена или не существует в этой вселенной';
  return (
    <div>
      <h1>{error}</h1>
      <CustomButton view="success" onClick={() => navigate('/companies')}>
        Назад
      </CustomButton>
    </div>
  );
};
