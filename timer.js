
  
var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 


const candidates = [
  { name: 'John Doe', location: 'New York', role: 'Software Engineer' },
  { name: 'Jane Smith', location: 'San Francisco', role: 'Data Scientist' },
  { name: 'Mark Johnson', location: 'Chicago', role: 'UI/UX Designer' },
  { name: 'Emily Brown', location: 'Los Angeles', role: 'Product Manager' }
];

function searchCandidates() {
  const location = document.getElementById('location').value;
  const role = document.getElementById('role').value;

  // Filter candidates based on location and role
  const filteredCandidates = candidates.filter(candidate =>
      candidate.location.toLowerCase() === location.toLowerCase() &&
      candidate.role.toLowerCase() === role.toLowerCase()
  );

  // Display the filtered candidates in the candidate list
  const candidateList = document.getElementById('candidateList');
  candidateList.innerHTML = '';

  if (filteredCandidates.length === 0) {
      candidateList.innerHTML = 'No candidates found.';
  } else {
      filteredCandidates.forEach(candidate => {
          const listItem = document.createElement('li');
          listItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.role}`;
          candidateList.appendChild(listItem);
      });
  }
}
