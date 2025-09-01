const CancellationPolicy = () => (
  <div className="bg-white p-6 shadow-md rounded-lg border">
    <h2 className="text-2xl font-semibold mb-4">Cancellation policy</h2>
    <p className="text-gray-600 mb-6">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-2xl font-semibold mb-4">Ground Rules</h2>
    <ul className="text-gray-600 list-disc list-inside space-y-1">
      <li>Follow the house rules</li>
      <li>Treat your Host’s home like your own</li>
    </ul>
  </div>
);

export default CancellationPolicy;