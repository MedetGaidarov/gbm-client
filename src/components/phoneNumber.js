import React from 'react';

function formatPhoneNumber(phoneNumber) {
  // Очищаем номер от всех нецифровых символов
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  
  // Используем регулярное выражение для форматирования номера
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    // Формируем номер в нужном формате
    return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
  }

  // Если номер не соответствует ожидаемому формату, возвращаем исходное значение
  return phoneNumber;
}

function PhoneNumberFormatter({ phoneNumber }) {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <div className='number'>{formattedPhoneNumber}</div>
  );
}

export default PhoneNumberFormatter;