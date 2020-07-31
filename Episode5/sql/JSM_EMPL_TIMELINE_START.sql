-- jsmpros.com
-- for demonstration purposes only
-- use at your own risk
SELECT TO_CHAR(add_months( MIN(EFFDT) 
 , -12) 
 , 'YYYY-MM-DD') 
 , TO_CHAR(add_months( MAX(EFFDT) 
 , 12) 
 , 'YYYY-MM-DD') 
  FROM PS_JOB J 
 WHERE EMPLID = :1 
   AND EMPL_RCD = :2
