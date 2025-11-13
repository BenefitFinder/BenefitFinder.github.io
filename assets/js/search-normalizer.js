function normalizeQuery(q) {
    q = q.toLowerCase();
  
    // Simple mappings
    if (q.includes("over 65") || q.includes("older than 65") || q.includes("senior"))
      q += " age>65";
  
    if (q.includes("under 20000") || q.includes("low income") || q.includes("income below"))
      q += " income<20000";
  
    if (q.includes("need food") || q.includes("food help") || q.includes("nutrition"))
      q += " food";
  
    if (q.includes("housing") || q.includes("home") || q.includes("rent"))
      q += " housing";
  
    return q;
  }
  