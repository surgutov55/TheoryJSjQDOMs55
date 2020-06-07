
          let JS = document.getElementById('JS');
          let Git = document.getElementById('Git');
          let React = document.getElementById('React');

          function showHide(event) {
              let target = event.target; // где был клик?
              if (target.tagName = 'LI')  {
                  let parent = target;   //  как родительский элемент
                  let child = parent.querySelector('span');   // выводим ребенка
                  if (child.style.display == 'none') {
                      child.style.display = "table";
                  }
                  else {
                      child.style.display = 'none';
                  }
              }

          };

          JS.addEventListener("click", showHide);
          Git.addEventListener("click", showHide);
          React.addEventListener("click", showHide);
